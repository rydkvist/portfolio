'use client';

import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then(res => res.json());

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GetCurrentPlaybackResponse } from '../server/types';
import { Spinner } from '@/components/Spinner';
import { calculateProgressPercentage, formatDuration } from '@/utils/helpers';

const fetchCurrentPlayback = async (endpoint: string): Promise => {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed to fetch current playback');
    }
    return res.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Something went wrong');
  }
};

export default function SpotifyPlayback() {
  return (
    <div className="w-full scale-105 rounded-md shadow-lg md:w-96">
      <div className="relative h-auto w-full flex-col items-start rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
        <span className="absolute right-4 top-2 h-8 w-8">
          <Image src="/images/companies/Spotify.png" alt="Spotify Icon" layout="fill" objectFit="contain" />
        </span>
        <Content />
      </div>
    </div>
  );
}

function Content() {
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR('/api/spotify/current-playback', fetchCurrentPlayback, {
    refreshInterval: 5000,
  });

  const [playback, setPlayback] = useState<{
    time: number;
    id: string;
  } | null>(null);
  const isPlaying = data?.isPlaying;
  const timeElapsedOnLoad = data?.progressMS;
  const song = data?.item;

  useEffect(() => {
    if (!song || !timeElapsedOnLoad) return;

    const isDifferentSong = playback?.id !== song.id;
    if (!playback || isDifferentSong) {
      setPlayback({
        id: song.id,
        time: timeElapsedOnLoad,
      });
    }

    const currentTime = playback?.time ?? timeElapsedOnLoad;
    const hasFinishedTrack = currentTime >= song.durationMS;

    if (hasFinishedTrack) {
      setPlayback(null);
      refetch();
    }

    const timer = setInterval(() => {
      if (!hasFinishedTrack) {
        setPlayback({
          id: song.id,
          time: currentTime + 1000,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [playback, refetch, song, timeElapsedOnLoad]);

  if (isLoading) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Spinner />
        <p className="mt-4 text-center text-neutral-600 dark:text-neutral-400">Loading Spotify Tracker...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p className="w-full text-sm text-neutral-800 dark:text-neutral-200">Could not show the Spotify Tracker:</p>
        <p>{error instanceof Error ? error.message : String(error)}</p>
      </div>
    );
  }

  if (data?.isPlaying && data.item) {
    const { item } = data;
    const progressPercentage = calculateProgressPercentage(playback?.time || 0, item.durationMS);

    return (
      <div>
        <p className="mb-1 w-full text-sm font-medium text-neutral-800 dark:text-neutral-200">Now playing</p>
        <div className="mb-2 flex flex-row">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.album?.url}
            title={item.name}
            className="relative mr-2 h-20 w-20 overflow-hidden rounded-sm transition-transform hover:scale-110 focus:scale-110"
          >
            {item.album?.imageURL && (
              <Image src={item.album.imageURL} alt={item.album.name} layout="fill" objectFit="cover" />
            )}
          </a>

          <div className="flex w-full flex-col overflow-hidden">
            <p className="truncate font-semibold text-neutral-900 dark:text-neutral-100">{item.name}</p>
            <p className="max-h-12 overflow-hidden text-ellipsis text-sm text-neutral-700 dark:text-neutral-300">
              {item.artists}
            </p>
          </div>
        </div>

        <div className="h-1 w-full overflow-hidden rounded-sm bg-neutral-400">
          <div
            className="h-full bg-neutral-600 transition-all ease-linear dark:bg-neutral-200"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
        <div className="mt-1 flex flex-row text-sm text-neutral-600 dark:text-neutral-400">
          <p className="mr-4 w-full">{formatDuration(playback?.time)}</p>
          <p>{formatDuration(item.durationMS)}</p>
        </div>

        {data.trackQueue && data.trackQueue.length > 0 && (
          <div className="mt-2 inline-flex w-full items-center justify-end">
            <p className="mr-auto mt-auto self-end text-sm text-neutral-600 dark:text-neutral-400">Coming up next</p>
            {data.trackQueue.map(track => (
              <a
                key={track.id}
                target="_blank"
                rel="noreferrer"
                href={track.album?.url ?? ''}
                title={track.name}
                className="relative z-0 mr-2 h-8 w-8 overflow-hidden rounded-sm shadow-md transition-transform last:mr-0 hover:scale-125 focus:scale-125"
              >
                {track.album?.imageURL && (
                  <Image src={track.album.imageURL} alt={track.album.name} layout="fill" objectFit="cover" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <p className="mr-4 w-full text-lg text-neutral-700 dark:text-neutral-300">
        {data?.isPlayingPodcast ? 'Listening to a podcast' : 'Offline'}
      </p>
    );
  }
}

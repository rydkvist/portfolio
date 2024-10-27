'use client';

import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then(res => res.json());

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GetCurrentPlaybackResponse } from '../server/types';
import { Spinner } from '@/components/Spinner';
import { calculateProgressPercentage, formatDuration } from '@/utils/helpers';

const fetchCurrentPlayback = async (endpoint: string): Promise<GetCurrentPlaybackResponse> => {
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
    <div className="w-full md:w-96 scale-105 rounded-md shadow-lg">
      <div className="w-full h-auto p-4 flex-col items-start bg-neutral-200 dark:bg-neutral-800 rounded-lg relative">
        <span className="w-8 h-8 absolute right-4 top-2">
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
      <div className="flex flex-col items-center justify-center w-full h-full">
        <Spinner />
        <p className="text-center mt-4 text-neutral-600 dark:text-neutral-400">Loading Spotify Tracker...</p>
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
        <p className="w-full font-medium text-sm text-neutral-800 dark:text-neutral-200 mb-1">Now playing</p>
        <div className="flex flex-row mb-2">
          <a
            target="_blank"
            rel="noreferrer"
            href={item.album?.url}
            title={item.name}
            className="overflow-hidden rounded-sm w-20 h-20 relative mr-2 transition-transform focus:scale-110 hover:scale-110"
          >
            {item.album?.imageURL && (
              <Image src={item.album.imageURL} alt={item.album.name} layout="fill" objectFit="cover" />
            )}
          </a>

          <div className="flex flex-col overflow-hidden w-full">
            <p className="font-semibold text-neutral-900 truncate dark:text-neutral-100">{item.name}</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 overflow-hidden max-h-12 text-ellipsis">
              {item.artists}
            </p>
          </div>
        </div>

        <div className="w-full h-1 bg-neutral-400 overflow-hidden rounded-sm">
          <div
            className="h-full transition-all ease-linear bg-neutral-600 dark:bg-neutral-200"
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>
        <div className="flex flex-row mt-1 text-neutral-600 dark:text-neutral-400 text-sm">
          <p className="w-full mr-4">{formatDuration(playback?.time)}</p>
          <p>{formatDuration(item.durationMS)}</p>
        </div>

        {data.trackQueue && data.trackQueue.length > 0 && (
          <div className="w-full inline-flex items-center justify-end mt-2">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mr-auto mt-auto self-end">Coming up next</p>
            {data.trackQueue.map(track => (
              <a
                key={track.id}
                target="_blank"
                rel="noreferrer"
                href={track.album?.url ?? ''}
                title={track.name}
                className="overflow-hidden mr-2 shadow-md last:mr-0 rounded-sm relative w-8 h-8 z-0 transition-transform focus:scale-125 hover:scale-125"
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
      <p className="w-full text-lg text-neutral-700 dark:text-neutral-300 mr-4">
        {data?.isPlayingPodcast ? 'Listening to a podcast' : 'Offline'}
      </p>
    );
  }
}

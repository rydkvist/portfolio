import { useQuery } from '@tanstack/react-query';
import { GetCurrentPlaybackResponse } from '../../pages/api/spotify/current-playback';
import Image from 'next/image';
import { msDifferenceToPercentage, msToMinutesAndSeconds } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { Spinner } from '../Spinner';

const fetchCurrentPlayback = async (): Promise<GetCurrentPlaybackResponse> => {
  try {
    const res = await fetch('api/spotify/current-playback');
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something went wrong');
    }
  }
};

const SpotifyPlayback = () => (
  <div className={`w-full md:w-96 scale-105 rounded-md shadow-lg`}>
    <div className="w-full h-auto p-4 flex-col items-start bg-neutral-200 dark:bg-neutral-800 rounded-lg relative">
      <span className="w-8 h-8 absolute right-4 top-2">
        <Image src="/images/companies/Spotify.png" alt="Spotify Icon" layout="fill" objectFit="contain" />
      </span>
      <Content />
    </div>
  </div>
);

type Playback = {
  songId: string;
  timeElapsed: number;
};

const Content = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['spotify-current-playback'],
    queryFn: fetchCurrentPlayback,
  });

  const [playback, setPlayback] = useState<Playback | null>(null);
  const isPlaying = data?.isPlaying;
  const timeElapsedOnLoad = data?.progressMS;
  const song = data?.item;

  useEffect(() => {
    if (!song || !timeElapsedOnLoad) return;

    const isDifferentSong = playback?.songId !== song.id;
    if (!playback || isDifferentSong) {
      setPlayback({
        songId: song.id,
        timeElapsed: timeElapsedOnLoad,
      });
    }

    const currentTime = playback?.timeElapsed ?? timeElapsedOnLoad;
    const hasFinishedTrack = currentTime >= song.durationMS;

    if (hasFinishedTrack) {
      setPlayback(null);
      refetch();
    }

    const timer = setInterval(() => {
      if (!hasFinishedTrack) {
        setPlayback({
          songId: song.id,
          timeElapsed: currentTime + 1000,
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
      <>
        <p className="w-full text-sm text-neutral-800 dark:text-neutral-200">Could not show the Spotify Tracker:</p>
        <p>{error}</p>
      </>
    );
  }

  return (
    <>
      <p className={`w-full font-medium text-sm text-neutral-800 dark:text-neutral-200 mb-1`}>Now playing</p>
      {isPlaying && song ? (
        <>
          <div className="flex flex-row mb-2 ">
            <a
              target="_blank"
              rel="noreferrer"
              href={song.album?.url}
              title={song.name}
              className={`overflow-hidden rounded-sm w-20 h-20 relative mr-2 transition-transform focus:scale-110 hover:scale-110`}
            >
              {song.album?.imageURL && (
                <Image src={song.album.imageURL} alt={song.album.name} layout="fill" objectFit="contain" />
              )}
            </a>

            <div className="flex flex-col overflow-hidden w-full">
              <p className="font-semibold text-neutral-900 truncate dark:text-neutral-100">{song.name}</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 overflow-hidden max-h-12 text-ellipsis">
                {song.artists}
              </p>
            </div>
          </div>

          <div className="w-full h-1 bg-neutral-400 overflow-hidden rounded-sm">
            <div
              className="w-full h-full transition-all ease-linear bg-neutral-600 dark:bg-neutral-200"
              style={{
                width: `${playback ? msDifferenceToPercentage(playback.timeElapsed, song.durationMS) : '0'}%`,
              }}
            />
          </div>
          <div
            className={`flex flex-row mt-1 text-neutral-600 dark:text-neutral-400 text-sm ${
              playback ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="w-full mr-4">{msToMinutesAndSeconds(playback?.timeElapsed)}</p>
            <p>{msToMinutesAndSeconds(song.durationMS)}</p>
          </div>

          {data.trackQueue && (
            <div className="w-full inline-flex items-center justify-end mt-2">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mr-auto mt-auto self-end">Coming up next</p>
              {data.trackQueue.map((track, index) => (
                <a
                  key={index + track.id}
                  target="_blank"
                  rel="noreferrer"
                  href={track.album?.url ?? ''}
                  title={track.name}
                  className={`overflow-hidden mr-2 shadow-md last:mr-0 rounded-sm relative w-8 h-8 z-0 transition-transform focus:scale-125 hover:scale-125`}
                >
                  {track.album?.imageURL && (
                    <Image src={track.album.imageURL} alt={track.album.name} layout="fill" objectFit="contain" />
                  )}
                </a>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className={`w-full text-lg text-neutral-700 dark:text-neutral-300 mr-4`}>
          {data?.isPlayingPodcast ? 'Podcast (Unknown Name)' : 'Offline'}
        </p>
      )}
    </>
  );
};

export default SpotifyPlayback;

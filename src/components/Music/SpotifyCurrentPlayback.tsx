import { useQuery } from 'react-query';
import { GetCurrentPlaybackResponse } from '../../pages/api/spotify/current-playback';
import { Heading } from '../Heading';
import Image from 'next/image';
import { SPOTIFY_URL } from '../../config';
import { msDifferenceToPercentage, msToMinutesAndSeconds } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { SpotifyItem } from '../../pages/api/spotify/types';
import { SpotifyTopTracksItem } from './SpotifyTopTracks/SpotifyTopTracksItem';
import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../../pages/api/spotify';
import { Spinner } from '../Spinner';

// TODO: Fun feature – Let people queue songs for you, make some kind of notification too, or something to know that someone has queue a song from the website

export const SpotifyCurrentPlayback = () => {
  const {
    isLoading,
    error,
    data: currentPlayback,
    refetch,
  } = useQuery<any, unknown, GetCurrentPlaybackResponse>('spotify-current-playback', () => {
    return fetch('/api/spotify/current-playback').then(res => res.json());
  });

  const [currentTime, setCurrentTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!currentPlayback) return;

    const hasOngoingTrack = currentTime === undefined && currentPlayback?.progressMS;

    if (hasOngoingTrack) {
      setCurrentTime(currentPlayback?.progressMS);
    }

    const timer = setInterval(() => {
      if (!currentPlayback.isPlaying) return;
      /* The miliseconds between currenttime and durationMS may differ on the accurracy */
      const hasFinishedTrack = currentTime >= currentPlayback?.item.durationMS;

      if (hasFinishedTrack) {
        refetch().then(() => {
          setCurrentTime(undefined);
        });
      } else {
        setCurrentTime(currentTime + 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentPlayback, currentTime, refetch]);

  return (
    <div className={`w-full md:w-96 scale-105 rounded-md shadow-lg`}>
      <div className="w-full h-auto p-4 flex-col items-start bg-neutral-200 dark:bg-neutral-800 rounded-lg relative">
        <span className="w-8 h-8 absolute right-4 top-2">
          <Image src="/images/companies/Spotify.png" alt="Spotify Icon" layout="fill" objectFit="contain" />
        </span>

        {isLoading && (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <Spinner />
            <p className="text-center mt-4 text-neutral-600 dark:text-neutral-400">Loading Spotify Tracker...</p>
          </div>
        )}

        {error && (
          <>
            <p className="w-full text-sm text-neutral-800 dark:text-neutral-200">Could not show the Spotify Tracker:</p>
            <p>{error}</p>
          </>
        )}

        {currentPlayback && (
          <>
            <p className={`w-full text-sm text-neutral-800 dark:text-neutral-200 mb-1`}>Currently listening to</p>
            {currentPlayback.isPlaying ? (
              <>
                <div className="flex flex-row mb-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={currentPlayback.item.album.url}
                    title={currentPlayback.item.name}
                    className={`overflow-hidden rounded-sm w-20 h-20 relative mr-2 transition-transform focus:scale-110 hover:scale-110`}
                  >
                    <Image
                      src={currentPlayback.item.album.imageURL}
                      alt={currentPlayback.item.album.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>

                  <div className="flex flex-col overflow-hidden w-full">
                    <p className="font-semibold text-neutral-900 truncate dark:text-neutral-100">
                      {currentPlayback.item.name}
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 overflow-hidden max-h-12 text-ellipsis">
                      {currentPlayback.item.artists}
                    </p>
                  </div>
                </div>

                <div className="w-full h-1 bg-neutral-400 overflow-hidden rounded-sm">
                  <div
                    className="w-full h-full transition-all ease-linear bg-neutral-600 dark:bg-neutral-200"
                    style={{
                      width: `${
                        currentTime === undefined
                          ? '0'
                          : msDifferenceToPercentage(currentTime, currentPlayback.item.durationMS)
                      }%`,
                    }}
                  />
                </div>
                <div
                  className={`flex flex-row mt-1 text-neutral-600 dark:text-neutral-400 text-sm ${
                    currentTime ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="w-full mr-4">{msToMinutesAndSeconds(currentTime)}</p>
                  <p>{msToMinutesAndSeconds(currentPlayback.item.durationMS)}</p>
                </div>

                {currentPlayback.trackQueue && (
                  <div className="w-full inline-flex items-center justify-end mt-2">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mr-auto mt-auto self-end">
                      Coming up next
                    </p>
                    {currentPlayback.trackQueue.map((track, index) => (
                      <a
                        key={index + track.id}
                        target="_blank"
                        rel="noreferrer"
                        href={track.album.url}
                        title={track.name}
                        className={`overflow-hidden mr-2 shadow-md last:mr-0 rounded-sm relative w-8 h-8 z-0 transition-transform focus:scale-125 hover:scale-125`}
                      >
                        <Image src={track.album.imageURL} alt={track.album.name} layout="fill" objectFit="contain" />
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className={`w-full text-lg text-neutral-700 dark:text-neutral-300 mr-4`}>
                {currentPlayback.isPlayingPodcast ? 'Podcast (Unknown Name)' : 'Offline'}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

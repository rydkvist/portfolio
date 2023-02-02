import { useQuery } from 'react-query';
import { FetchCurrentPlaybackResponse } from '../../pages/api/spotify/current-playback';
import { Heading } from '../Heading';
import Image from 'next/image';
import { SPOTIFY_URL } from '../../config';
import { msDifferenceToPercentage, msToMinutesAndSeconds } from '../../utils/helpers';
import { useEffect, useState } from 'react';
import { navigationAccessibilityClass } from '../Navigation/NavigationIcons';

// TODO: Fun feature – Let people queue songs for you, make some kind of notification too, or something to know that someone has queue a song from the website

export const SpotifyCurrentPlayback = () => {
  const { isLoading, error, data } = useQuery('spotify-current-playback', () => {
    return fetch('/api/spotify/current-playback').then(res => res.json());
  });

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (data?.progressMS !== undefined && currentTime === 0) {
      setCurrentTime(data.progressMS);
    }

    const timer = setInterval(() => {
      if (data?.isPlaying) {
        setCurrentTime(currentTime + 1000);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime, data?.isPlaying, data?.progressMS]);

  if (isLoading) return <LoadingSpinner />;

  if (error) return <Heading as="h3" className="text-center">{`Could not show the Spotify Tracker: ${error}`}</Heading>;

  const currentPlayback = data as FetchCurrentPlaybackResponse;

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <a
        target="_blank"
        rel="noreferrer"
        href={currentPlayback.isPlaying ? currentPlayback.item.album.url : SPOTIFY_URL}
        title={currentPlayback.isPlaying ? 'See the track on Spotify' : 'Visit my Spotify profile'}
        className={`w-full sm:w-96 transition-transform rounded-md focus:scale-105 hover:scale-105 shadow-lg ${navigationAccessibilityClass}`}
      >
        <div className="w-full h-auto p-4 flex-col items-start bg-neutral-200 dark:bg-neutral-800 rounded-lg">
          <div className="flex flex-row items-start">
            <p className={`w-full text-sm text-neutral-800 dark:text-neutral-200 mr-4 font-semibold`}>Now playing</p>
            <span className="w-8 h-8 relative">
              <Image src="/images/companies/Spotify.png" alt="Spotify Icon" layout="fill" objectFit="contain" />
            </span>
          </div>

          {currentPlayback.isPlaying ? (
            <>
              <div className="flex flex-row items-start mt-1 mb-3.5">
                <span className="overflow-hidden rounded-sm w-20 h-20 relative mr-2">
                  <Image
                    src={currentPlayback.item.album.imageURL}
                    alt={currentPlayback.item.album.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </span>

                <div className="flex-col items-start overflow-hidden">
                  <p className="font-semibold text-neutral-900 truncate dark:text-neutral-100">
                    {currentPlayback.isPlaying ? currentPlayback.item.name : 'Offline'}
                  </p>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300">
                    {currentPlayback.isPlaying ? currentPlayback.item.artists : 'Spotify'}
                  </p>
                </div>
              </div>

              <div className="w-full h-1 bg-neutral-400 overflow-hidden rounded-sm">
                <div
                  className="w-full h-full bg-neutral-600 dark:bg-neutral-200"
                  style={{
                    width: `${msDifferenceToPercentage(currentTime, currentPlayback.item.durationMS)}%`,
                  }}
                />
              </div>
              <div className="flex flex-row mt-1 text-neutral-600 dark:text-neutral-400 text-sm">
                <p className="w-full mr-4">{msToMinutesAndSeconds(currentTime)}</p>
                <p>{msToMinutesAndSeconds(currentPlayback.item.durationMS)}</p>
              </div>
            </>
          ) : (
            <p className={`w-full text-lg text-neutral-700 dark:text-neutral-300 mr-4`}>Offline</p>
          )}
        </div>
      </a>

      {currentPlayback.isPlaying && (
        <a
          href={currentPlayback.isPlaying ? currentPlayback.item.url : SPOTIFY_URL}
          className="border-green-500 border text-green-500 transition-all shadow-md hover:bg-green-500 hover:text-white mt-4 text-sm py-2 px-6 rounded-lg"
          target="_blank"
          rel="noreferrer"
        >
          Listen to song in Spotify
        </a>
      )}
      <p className="text-neutral-700 text-center text-sm dark:text-neutral-300 mt-4">
        {currentPlayback.isPlaying
          ? 'What do you think of the song so far? 👀'
          : "Come back again when I'm listening to live!"}
      </p>
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center w-full h-full">
    <div className="w-16 h-16 mb-4">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          r="34"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(325.906 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="1.25s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
    <p className="text-center text-neutral-600 dark:text-neutral-400">Loading Spotify Tracker...</p>
  </div>
);

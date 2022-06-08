import { useQuery } from 'react-query';
import { FetchCurrentPlaybackResponse } from '../../pages/api/spotify/current-playback';
import { Heading } from '../Heading';
import Image from 'next/image';
import { SPOTIFY_URL } from '../../config';
import { msDifferenceToPercentage, msToMinutesAndSeconds } from '../../utils/helpers';
import { useEffect, useState } from 'react';

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

  if (isLoading)
    return (
      <Heading as="h3" className="text-center">
        Loading...
      </Heading>
    );

  if (error) return <Heading as="h3" className="text-center">{`An error has occurred: ${error}`}</Heading>;

  const currentPlayback = data as FetchCurrentPlaybackResponse;

  return (
    <div className="flex flex-col items-center w-full">
      <a
        target="_blank"
        rel="noreferrer"
        href={currentPlayback.isPlaying ? currentPlayback.item.album.url : SPOTIFY_URL}
        title={currentPlayback.isPlaying ? 'See the track on Spotify' : 'Visit my Spotify profile'}
        className="w-full md:w-96 transition-all rounded-md hover:scale-105 shadow-lg"
      >
        <div className="w-full h-auto p-4 flex-col items-start bg-neutral-200 dark:bg-neutral-800 rounded-lg">
          <div className="flex flex-row items-start">
            <p className={`w-full text-sm text-neutral-800 dark:text-neutral-200 mr-4`}>Currently listening to</p>
            <Image src="/images/companies/Spotify.png" alt="Spotify Icon" objectFit="contain" width={32} height={32} />
          </div>

          {currentPlayback.isPlaying ? (
            <>
              <div className="flex flex-row items-start mt-1 mb-3.5">
                <span className="overflow-hidden rounded-sm mr-2">
                  <img
                    src={currentPlayback.item.album.imageURL}
                    alt={currentPlayback.item.album.name}
                    className={`w-20 h-auto`}
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
    </div>
  );
};
import { useQuery } from 'react-query';
import { Heading } from '../Heading';
import { msDifferenceToPercentage, msToMinutesAndSeconds } from '../../utils/helpers';
import { FetchTopTracksResponse } from '../../pages/api/spotify/top-tracks';

export const SpotifyTopTracks = () => {
  const { isLoading, error, data } = useQuery('spotify-top-tracks', () => {
    return fetch('/api/spotify/top-tracks').then(res => res.json());
  });

  if (isLoading) return <></>;

  if (error)
    return <Heading as="h3" className="text-center">{`Could not show top 20 songs of Niklas: ${error}`}</Heading>;

  const topTracks = data as FetchTopTracksResponse;

  return (
    <div className="flex flex-col w-full">
      {topTracks.items.map((track, index) => (
        <div key={index} className="flex flex-row items-start mt-1 mb-3.5">
          <span className="overflow-hidden rounded-sm mr-2">
            <img src={track.album.imageURL} alt={track.name} width={32} height={32} />
          </span>
          <span className="overflow-hidden rounded-sm mr-2">
            <p className="text-sm text-neutral-800 dark:text-neutral-200">{track.name}</p>
          </span>
          <span className="overflow-hidden rounded-sm mr-2">
            <p className="text-sm text-neutral-800 dark:text-neutral-200">{msToMinutesAndSeconds(track.durationMS)}</p>
          </span>
          <span className="overflow-hidden rounded-sm mr-2">
            <p className="text-sm text-neutral-800 dark:text-neutral-200">
              {msDifferenceToPercentage(track.durationMS, 0)}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};

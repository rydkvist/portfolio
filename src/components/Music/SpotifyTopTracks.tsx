import { useQuery } from 'react-query';
import { Heading } from '../Heading';
import { FetchTopTracksResponse } from '../../pages/api/spotify/top-tracks';
import { navigationAccessibilityClass } from '../Navigation/NavigationIcons';

export const SpotifyTopTracks = () => {
  const { isLoading, error, data } = useQuery('spotify-top-tracks', () => {
    return fetch('/api/spotify/top-tracks').then(res => res.json());
  });

  if (isLoading) return <></>;

  if (error)
    return <Heading as="h3" className="text-center">{`Could not show top 20 songs of Niklas: ${error}`}</Heading>;

  const topTracks = data as FetchTopTracksResponse;

  // TODO: Make it available to switch between different track time terms
  return (
    <>
      <Heading as="h2" className="text-center mt-12 mb-4">
        Top 20 Tracks (last 4 weeks)
      </Heading>

      <div className={`flex flex-wrap justify-center w-full`}>
        {topTracks.items.map((track, index) => (
          <a
            key={index}
            href={track.url}
            target="_blank"
            rel="noreferrer"
            title={track.name}
            className={`flex flex-row w-full md:w-64 items-start bg-neutral-200 dark:bg-neutral-700 shadow-sm p-2 rounded-md mt-1 mb-4 mr-0 md:mr-6 transition-all focus:scale-105 hover:scale-105 ${navigationAccessibilityClass}`}
          >
            <span className="overflow-hidden rounded-sm mr-2">
              <img src={track.album.imageURL} alt={track.name} width={40} height={40} />
            </span>

            <div className="flex flex-col">
              <p className="text-neutral-800 dark:text-neutral-200 leading-5 ">{track.name}</p>
              <p className="text-xs text-neutral-700 dark:text-neutral-300">{track.artists}</p>
            </div>

            <div className="mt-auto ml-4">{/* TODO: Add play button */}</div>
          </a>
        ))}
      </div>
    </>
  );
};

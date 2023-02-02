import { useQuery } from 'react-query';
import { Heading } from '../../Heading';
import { FetchTopTracksResponse } from '../../../pages/api/spotify/top-tracks';
import { useState } from 'react';
import { SpotifyTopTimeRange } from '../../../pages/api/spotify/top-tracks';
import { SpotifyTopRangePicker } from './SpotifyTopRangePicker';
import { SpotifyTopTracksItem } from './SpotifyTopTracksItem';

export const SpotifyTopTracks = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<SpotifyTopTimeRange>('short_term');
  const {
    isLoading,
    error,
    data: shortTimeRangeData,
  } = useQuery(`spotify-top-tracks-short`, () => {
    return fetch(`/api/spotify/top-tracks?time_range=short_term`).then(res => res.json());
  });

  const { data: mediumTimeRangeData } = useQuery('spotify-top-tracks-medium', () => {
    return fetch(`/api/spotify/top-tracks?time_range=medium_term`).then(res => res.json());
  });

  const { data: longTimeRangeData } = useQuery('spotify-top-tracks-long', () => {
    return fetch(`/api/spotify/top-tracks?time_range=long_term`).then(res => res.json());
  });

  if (isLoading) return <></>;

  if (error)
    return <Heading as="h3" className="text-center">{`Could not show Top 20 songs of Niklas: ${error}`}</Heading>;

  const topTracks = (
    selectedTimeRange === 'long_term'
      ? longTimeRangeData
      : selectedTimeRange === 'medium_term'
      ? mediumTimeRangeData
      : shortTimeRangeData
  ) as FetchTopTracksResponse;

  return (
    <div className="flex flex-col mt-4 w-full">
      <div className="flex flex-col justify-between items-center mb-6 md:mb-4">
        <Heading as="h3" className="mb-3 text-center">
          Discover my favorite tracks
        </Heading>

        <SpotifyTopRangePicker selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange} />
        <p className="text-neutral-700 text-sm text-center mt-4 dark:text-neutral-300">
          My Top 20 playlists updated via the Spotify API.
        </p>
      </div>

      <div className={`flex flex-wrap justify-center`}>
        {topTracks.items.map((track, index) => (
          <SpotifyTopTracksItem key={track.name + index} track={track} index={index} />
        ))}
      </div>
    </div>
  );
};

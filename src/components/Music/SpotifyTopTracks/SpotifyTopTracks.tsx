import { useQuery } from '@tanstack/react-query';
import { Heading } from '../../Heading';
import { FetchTopTracksResponse } from '../../../pages/api/spotify/top-tracks';
import { useState } from 'react';
import { SpotifyTopTimeRange } from '../../../pages/api/spotify/top-tracks';
import { SpotifyTopRangePicker } from './SpotifyTopRangePicker';
import { SpotifyTopTracksItem } from './SpotifyTopTracksItem';

const fetchTopTracks = async (timeRange: SpotifyTopTimeRange): Promise<FetchTopTracksResponse> => {
  try {
    const res = await fetch(`/api/spotify/top-tracks?time_range=${timeRange}`);
    return res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something went wrong');
    }
  }
};

export const SpotifyTopTracks = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<SpotifyTopTimeRange>('short_term');
  const {
    isLoading: isLoadingShort,
    error,
    data: shortTimeRangeData,
  } = useQuery({ queryKey: ['spotify-top-tracks-short'], queryFn: async () => fetchTopTracks('short_term') });

  const { isLoading: isLoadingMedium, data: mediumTimeRangeData } = useQuery({
    queryKey: ['spotify-top-tracks-medium'],
    queryFn: async () => fetchTopTracks('medium_term'),
  });

  const { isLoading: isLoadingLong, data: longTimeRangeData } = useQuery({
    queryKey: ['spotify-top-tracks-long'],
    queryFn: async () => fetchTopTracks('long_term'),
  });

  const isLoadingData = isLoadingShort || isLoadingMedium || isLoadingLong;

  if (isLoadingData) return <></>;

  if (error)
    return (
      <Heading as="h3" className="text-center">{`Could not show Top 20 songs of Niklas: ${
        error.message || error.cause
      }`}</Heading>
    );

  const topTracks =
    selectedTimeRange === 'long_term'
      ? longTimeRangeData
      : selectedTimeRange === 'medium_term'
      ? mediumTimeRangeData
      : shortTimeRangeData;

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="flex flex-col justify-between items-center mb-6 md:mb-4">
        <Heading as="h3" className="mb-3 text-center">
          Discover my favorite tracks
        </Heading>

        <p className="text-neutral-700 text-sm text-center mb-4 dark:text-neutral-300">
          My Top 20 playlists updated via the Spotify API.
        </p>
        <SpotifyTopRangePicker selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange} />
      </div>

      <div className={`flex flex-wrap justify-center`}>
        {topTracks?.items.map((track, index) => (
          <SpotifyTopTracksItem key={track.name + index} track={track} index={index} />
        ))}
      </div>
    </div>
  );
};

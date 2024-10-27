'use client';
import { useState } from 'react';
import { SpotifyItem, SpotifyTopTimeRange } from '@/_lib/spotify/types';
import { Heading } from '../../../_components/old/Heading';
import { SpotifyTopTracksRangePicker } from './spotify-top-tracks-range-picker';
import { SpotifyTopTracksItem } from './spotify-top-tracks-item';

interface SpotifyTopTracksClientProps {
  topTracksData: Record<SpotifyTopTimeRange, SpotifyItem[]>;
}

export default function SpotifyTopTracksClient({ topTracksData }: SpotifyTopTracksClientProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState<SpotifyTopTimeRange>('short_term');

  const topTracks = topTracksData[selectedTimeRange];

  return (
    <div className="flex flex-col mt-6 w-full">
      <div className="flex flex-col justify-between items-center mb-6 md:mb-4">
        <Heading as="h3" className="mb-3 text-center">
          Discover my favorite tracks
        </Heading>
        <p className="text-neutral-700 text-sm text-center mb-4 dark:text-neutral-300">
          My Top 20 playlists updated via the Spotify API.
        </p>
        <SpotifyTopTracksRangePicker
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {topTracks.map((track, index) => (
          <SpotifyTopTracksItem key={`${track.id}-${index}`} track={track} index={index} />
        ))}
      </div>
    </div>
  );
}
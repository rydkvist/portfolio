'use client';
import { useState } from 'react';
import { RangePicker } from './range-picker';
import { TopTracksItem } from './top-tracks-item';
import { SpotifyItem, SpotifyTopTimeRange } from '../../server/types';

interface TopTracksClientProps {
  topTracksData: Record<SpotifyTopTimeRange, SpotifyItem[]>;
}

export default function TopTracksClient({ topTracksData }: TopTracksClientProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState<SpotifyTopTimeRange>('short_term');

  const topTracks = topTracksData[selectedTimeRange];

  return (
    <div className="mt-6 flex w-full flex-col">
      <div className="mb-6 flex flex-col items-center justify-between md:mb-4">
        <h3 className="size-lg mb-3 text-center">Discover my favorite tracks</h3>

        <p className="description mb-4 text-center text-sm text-neutral-700 dark:text-neutral-300">
          My Top 20 playlists updated via the Spotify API.
        </p>
        <RangePicker selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange} />
      </div>

      <div className="flex flex-row flex-wrap justify-center">
        {topTracks.map((track, index) => (
          <TopTracksItem key={`${track.id}-${index}`} track={track} index={index} />
        ))}
      </div>
    </div>
  );
}

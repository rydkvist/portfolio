'use client';
import { useState } from 'react';
import { SpotifyTopTracksRangePicker } from './spotify-top-tracks-range-picker';
import { SpotifyTopTracksItem } from './spotify-top-tracks-item';
import { SpotifyItem, SpotifyTopTimeRange } from '../../server/types';

interface SpotifyTopTracksClientProps {
  topTracksData: Record<SpotifyTopTimeRange, SpotifyItem[]>;
}

export default function SpotifyTopTracksClient({ topTracksData }: SpotifyTopTracksClientProps) {
  const [selectedTimeRange, setSelectedTimeRange] = useState<SpotifyTopTimeRange>('short_term');

  const topTracks = topTracksData[selectedTimeRange];

  return (
    <div className="mt-6 flex w-full flex-col">
      <div className="mb-6 flex flex-col items-center justify-between md:mb-4">
        <h2 className="size-lg mb-3 text-center">Discover my favorite tracks</h2>
        <p className="mb-4 text-center text-sm text-neutral-700 dark:text-neutral-300">
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

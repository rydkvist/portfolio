import { getTopTracks } from '@/_lib/spotify/getTopTracks';
import { SpotifyItem, SpotifyTopTimeRange } from '@/_lib/spotify/types';
import SpotifyTopTracksClient from './spotify-top-tracks-client';

export default async function SpotifyTopTracks() {
  try {
    const [shortTermTracks, mediumTermTracks, longTermTracks] = await Promise.all([
      getTopTracks('short_term'),
      getTopTracks('medium_term'),
      getTopTracks('long_term'),
    ]);

    const topTracksData: Record<SpotifyTopTimeRange, SpotifyItem[]> = {
      short_term: shortTermTracks,
      medium_term: mediumTermTracks,
      long_term: longTermTracks,
    };

    return <SpotifyTopTracksClient topTracksData={topTracksData} />;
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return (
      <div className="flex flex-col items-center">
        <p className="size-lg text-center">
          Could not show Top 20 songs: {error instanceof Error ? error.message : String(error)}
        </p>
      </div>
    );
  }
}

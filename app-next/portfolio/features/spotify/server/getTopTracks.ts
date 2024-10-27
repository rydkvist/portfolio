import { getSpotifyToken } from './getSpotifyToken';
import { API_SPOTIFY_URL, formatSpotifyItem } from './utils';
import { SpotifyItem, SpotifyTopTimeRange, SpotifyTopTracksSchema } from './types';

export async function getTopTracks(timeRange: SpotifyTopTimeRange = 'short_term', limit: number = 20): Promise {
  try {
    const spotifyToken = await getSpotifyToken('top-read');

    const url = new URL(`${API_SPOTIFY_URL}/me/top/tracks`);
    url.searchParams.append('time_range', timeRange);
    url.searchParams.append('limit', limit.toString());

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Failed to fetch top tracks: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`,
      );
    }

    const data = await response.json();
    const parsedData = SpotifyTopTracksSchema.safeParse(data);

    if (!parsedData.success) {
      throw new Error('Invalid data from Spotify API.');
    }

    return parsedData.data.items.map(formatSpotifyItem);
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    throw new Error('Failed to fetch top tracks.');
  }
}

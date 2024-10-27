import { getSpotifyToken } from './getSpotifyToken';
import { API_SPOTIFY_URL, formatSpotifyItem } from './utils';
import { GetCurrentPlaybackResponse, SpotifyPlaybackSchema, SpotifyQueueSchema } from './types';

export async function getCurrentPlayback(): Promise<GetCurrentPlaybackResponse> {
  try {
    const spotifyToken = await getSpotifyToken('playback-state');

    const [playbackResponse, queueResponse] = await Promise.all([
      fetch(`${API_SPOTIFY_URL}/me/player`, {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }),
      fetch(`${API_SPOTIFY_URL}/me/player/queue`, {
        headers: {
          Authorization: `Bearer ${spotifyToken}`,
        },
      }),
    ]);

    if (playbackResponse.status === 204 || playbackResponse.status > 400) {
      return { isPlaying: false } as GetCurrentPlaybackResponse;
    }

    const playbackData = await playbackResponse.json();
    const queueData = await queueResponse.json();

    const parsedPlayback = SpotifyPlaybackSchema.safeParse(playbackData);
    const parsedQueue = SpotifyQueueSchema.safeParse(queueData);

    if (!parsedPlayback.success || !parsedQueue.success) {
      throw new Error('Invalid data from Spotify API.');
    }

    const isPlayingPodcast = parsedPlayback.data.currently_playing_type === 'episode';

    return {
      device: {
        name: parsedPlayback.data.device.name,
        type: parsedPlayback.data.device.type,
        volume: parsedPlayback.data.device.volume_percent,
      },
      item: parsedPlayback.data.item ? formatSpotifyItem(parsedPlayback.data.item) : null,
      progressMS: parsedPlayback.data.progress_ms,
      isPlaying: parsedPlayback.data.is_playing,
      volumePercent: parsedPlayback.data.device.volume_percent,
      isPlayingPodcast,
      trackQueue: !isPlayingPodcast ? parsedQueue.data.queue.slice(0, 5).map(formatSpotifyItem) : [],
    };
  } catch (error) {
    console.error('Error fetching current playback:', error);
    throw new Error('Failed to fetch current playback.');
  }
}

import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';
import { SpotifyDevice, SpotifyItem } from './types';

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-information-about-the-users-current-playback

export type GetCurrentPlaybackResponse = {
  device: SpotifyDevice;
  item: SpotifyItem | null;
  progressMS: number;
  isPlaying: boolean;
  isPlayingPodcast: boolean;
  volumePercent: number;
  trackQueue: SpotifyItem[];
};

const getCurrentPlayback = async (_, res): Promise<GetCurrentPlaybackResponse> => {
  const { access_token: spotifyToken } = await getSpotifyAccessToken('playback-state');

  const response = await fetch(`${API_SPOTIFY_URL}/me/player`, {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const trackQueueResponse = await fetch(`${API_SPOTIFY_URL}/me/player/queue`, {
    headers: {
      Authorization: `Bearer ${spotifyToken}`,
    },
  });

  const responseJSON = await response.json();
  const trackQueueJSON = await trackQueueResponse.json();

  const isPlayingPodcast = responseJSON.currently_playing_type === 'episode';

  const currentPlaybackResponse: GetCurrentPlaybackResponse = {
    device: {
      name: responseJSON.device.name,
      type: responseJSON.device.type,
      volume: responseJSON.device.volume_percent,
    },
    item: responseJSON.item ? formatSpotifyItem(responseJSON.item) : null,
    progressMS: responseJSON.progress_ms,
    isPlaying: responseJSON.is_playing,
    volumePercent: responseJSON.volume_percent,
    isPlayingPodcast,
    trackQueue: isPlayingPodcast
      ? []
      : trackQueueJSON.queue.length > 0
      ? trackQueueJSON.queue.slice(0, 5).map((item: any) => formatSpotifyItem(item))
      : [],
  };

  return res.status(200).json(currentPlaybackResponse);
};

const formatSpotifyItem = (item: any): SpotifyItem => {
  return {
    id: item.id,
    album: {
      name: item.album.name,
      artists: item.album.artists.map(artist => artist.name).join(', '),
      url: item.album.external_urls.spotify,
      imageURL: item.album.images[0].url,
    },
    name: item.name,
    artists: item.artists.map(artist => artist.name).join(', '),
    url: item.external_urls.spotify,
    durationMS: item.duration_ms,
    itemPreviewURL: item.preview_url,
  };
};

export default getCurrentPlayback;

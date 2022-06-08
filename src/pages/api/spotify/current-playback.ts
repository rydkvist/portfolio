import { API_SPOTIFY_URL, getSpotifyPlaybackStateAccessToken } from '../spotify';
import { SpotifyDevice, SpotifyItem } from './current-playback.types';

const CURRENT_PLAYBACK_ENDPOINT = `${API_SPOTIFY_URL}/me/player`;

const getCurrentPlayback = async () => {
  const { access_token } = await getSpotifyPlaybackStateAccessToken();

  return fetch(CURRENT_PLAYBACK_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export type FetchCurrentPlaybackResponse = {
  device: SpotifyDevice;
  item: SpotifyItem;
  progressMS: number;
  isPlaying: boolean;
};

const fetchCurrentPlayback = async (_, res): Promise<FetchCurrentPlaybackResponse> => {
  const response = await getCurrentPlayback();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const responseJSON = await response.json();

  const currentPlaybackResponse: FetchCurrentPlaybackResponse = {
    device: {
      name: responseJSON.device.name,
      type: responseJSON.device.type,
      volume: responseJSON.device.volume_percent,
    },
    item: {
      album: {
        name: responseJSON.item.album.name,
        artists: responseJSON.item.album.artists.map(artist => artist.name).join(', '),
        url: responseJSON.item.album.external_urls.spotify,
        imageURL: responseJSON.item.album.images[0].url,
      },
      name: responseJSON.item.name,
      artists: responseJSON.item.artists.map(artist => artist.name).join(', '),
      url: responseJSON.item.external_urls.spotify,
      durationMS: responseJSON.item.duration_ms,
      itemPreviewURL: responseJSON.item.preview_url,
    },
    progressMS: responseJSON.progress_ms,
    isPlaying: responseJSON.is_playing,
  };

  return res.status(200).json(currentPlaybackResponse);
};

export default fetchCurrentPlayback;

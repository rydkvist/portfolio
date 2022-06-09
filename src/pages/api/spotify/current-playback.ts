import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';
import { SpotifyDevice, SpotifyItem } from './types';

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-information-about-the-users-current-playback

const getCurrentPlayback = async () => {
  const { access_token } = await getSpotifyAccessToken('playback-state');

  return fetch(`${API_SPOTIFY_URL}/me/player`, {
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
  volumePercent: number;
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
    volumePercent: responseJSON.volume_percent,
  };

  return res.status(200).json(currentPlaybackResponse);
};

export default fetchCurrentPlayback;

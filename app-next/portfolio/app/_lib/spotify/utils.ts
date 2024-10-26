import { ServerSpotifyItem, SpotifyItem } from './types';

export const API_SPOTIFY_URL = 'https://api.spotify.com/v1';

export const formatSpotifyItem = (item: ServerSpotifyItem): SpotifyItem => {
  return {
    id: item.id,
    album: {
      name: item.album.name,
      artists: item.album.artists.map(artist => artist.name).join(', '),
      url: item.album.external_urls.spotify,
      imageURL: item.album.images[0]?.url || '',
    },
    name: item.name,
    artists: item.artists.map(artist => artist.name).join(', '),
    url: item.external_urls.spotify,
    durationMS: item.duration_ms,
    itemPreviewURL: item.preview_url,
  };
};

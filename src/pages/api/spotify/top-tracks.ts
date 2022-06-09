import { toQueryString } from '../../../utils/helpers';
import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';
import { SpotifyItem } from './types';

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks

type TopTimeRange = 'short_term' | 'medium_term' | 'long_term';

const getTopTracks = async (
  type: 'artists' | 'tracks' = 'tracks',
  timeRange: TopTimeRange = 'short_term',
  limit: number = 20
) => {
  const { access_token } = await getSpotifyAccessToken('top-read');

  const queryParams = {
    time_range: timeRange,
    limit: limit,
  };

  return fetch(`${API_SPOTIFY_URL}/me/top/${type}${toQueryString(queryParams)}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export type FetchTopTracksResponse = {
  items: [SpotifyItem];
};

const fetchTopTracks = async (_, res): Promise<FetchTopTracksResponse> => {
  const response = await getTopTracks();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({});
  }

  const responseJSON = await response.json();

  const topTracksResponse: FetchTopTracksResponse = {
    items: responseJSON.items.map(item => ({
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
    })),
  };

  return res.status(200).json(topTracksResponse);
};

export default fetchTopTracks;

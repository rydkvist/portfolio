import { NextApiRequest, NextApiResponse } from 'next';
import { toQueryString } from '../../../utils/helpers';
import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';
import { ServerSpotifyItem, SpotifyItem } from './types';

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks

export type SpotifyTopTimeRange = 'short_term' | 'medium_term' | 'long_term';

const getTopTracks = async (timeRange: SpotifyTopTimeRange = 'short_term', limit: number = 20) => {
  const { access_token } = await getSpotifyAccessToken('top-read');
  const type: 'artists' | 'tracks' = 'tracks';

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
  items: SpotifyItem[];
};

const fetchTopTracks = async (req: NextApiRequest, res: NextApiResponse) => {
  const { time_range } = req.query;

  if (!time_range) {
    res.status(400).json({ error: 'Missing query param: time_range' });
  }

  if (!['short_term', 'medium_term', 'long_term'].includes(time_range as string)) {
    res.status(400).json({ error: `Invalid query param: time_range instead entered ${time_range}` });
  }

  const response = await getTopTracks(time_range as SpotifyTopTimeRange);

  if (response.status === 204 || response.status > 400) {
    res.status(200).json({});
  }

  const responseJSON = await response.json();

  const topTracksResponse: FetchTopTracksResponse = {
    items: responseJSON.items.map((item: ServerSpotifyItem) => ({
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

import { NextApiRequest, NextApiResponse } from 'next';
import { toQueryString } from '../../../utils/helpers';
import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';

export type SpotifySearchType = 'album' | 'artist' | 'playlist' | 'track';

// https://developer.spotify.com/documentation/web-api/reference/#/operations/search

interface SpotifySearchRequest {
  searchQuery: string;
  type: SpotifySearchType;
  limit: number;
  offset: number;
}

// TODO: Implementation for Spotify Search in app

export const spotifySearch = async (request: SpotifySearchRequest): Promise<any> => {
  const { access_token } = await getSpotifyAccessToken('private');

  const queryParams = {
    q: request.searchQuery,
    type: request.type,
    limit: request.limit,
    offset: request.offset,
  };

  return fetch(`${API_SPOTIFY_URL}/search${toQueryString(queryParams)}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const getSpotifySearch = async (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.query;

  const response = await spotifySearch({
    searchQuery: request.searchQuery as string,
    type: request.type as SpotifySearchType,
    limit: parseInt(request.limit as string),
    offset: parseInt(request.offset as string),
  });

  if (response.status === 204 || response.status > 400) {
    res.status(200).json({});
  }

  const responseJSON = await response.json();

  const searchResponse: any = { ...responseJSON };

  res.status(200).json(searchResponse);
};

export default getSpotifySearch;

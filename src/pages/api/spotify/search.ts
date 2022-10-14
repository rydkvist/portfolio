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

const getSpotifySearch = async (req, res): Promise<any> => {
  const request = req.query as SpotifySearchRequest;
  const response = await spotifySearch(request);

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({});
  }

  const responseJSON = await response.json();

  const searchResponse: any = { ...responseJSON };

  return res.status(200).json(searchResponse);
};

export default getSpotifySearch;

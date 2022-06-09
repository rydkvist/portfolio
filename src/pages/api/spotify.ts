import { stringify } from 'querystring';

export const API_SPOTIFY_URL = 'https://api.spotify.com/v1';
export const ACCOUNTS_SPOTIFY_URL = 'https://accounts.spotify.com';

const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `${ACCOUNTS_SPOTIFY_URL}/api/token`;

type SpotifyAccessTokenScope = 'playback-state' | 'recently-played' | 'currently-playing' | 'top-read';

export const getSpotifyAccessToken = async (type: SpotifyAccessTokenScope) => {
  var processEnvRefreshToken = '';

  switch (type) {
    case 'playback-state':
      processEnvRefreshToken = process.env.SPOTIFY_PLAYBACK_STATE_REFRESH_TOKEN;
      break;
    case 'recently-played':
      processEnvRefreshToken = process.env.SPOTIFY_RECENTLY_PLAYED_REFRESH_TOKEN;
      break;
    case 'currently-playing':
      processEnvRefreshToken = process.env.SPOTIFY_CURRENTLY_PLAYING_REFRESH_TOKEN;
      break;
    case 'top-read':
      processEnvRefreshToken = process.env.SPOTIFY_TOP_READ_REFRESH_TOKEN;
      break;
    default:
      break;
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify({
      grant_type: 'refresh_token',
      refresh_token: processEnvRefreshToken,
    }),
  });

  return response.json();
};

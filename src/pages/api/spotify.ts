import { stringify } from 'querystring';

export const API_SPOTIFY_URL = 'https://api.spotify.com/v1';
export const ACCOUNTS_SPOTIFY_URL = 'https://accounts.spotify.com';

const basic = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
const TOKEN_ENDPOINT = `${ACCOUNTS_SPOTIFY_URL}/api/token`;

export const getSpotifyPlaybackStateAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: stringify({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_PLAYBACK_STATE_REFRESH_TOKEN,
    }),
  });

  return response.json();
};

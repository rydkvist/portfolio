'use server';
import { z } from 'zod';
import { stringify } from 'querystring';

export type SpotifyAccessTokenScope =
  | 'playback-state'
  | 'recently-played'
  | 'currently-playing'
  | 'top-read'
  | 'user-modify-playback-state'
  | 'private';

const SPOTIFY_ACCOUNTS_API_URL = 'https://accounts.spotify.com';

const authorizationClientID = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
).toString('base64');

const SpotifyTokenSchema = z.object({
  access_token: z.string(),
  token_type: z.string(),
  expires_in: z.number(),
  scope: z.string(),
});

const SCOPE_REFRESH_TOKEN_MAP: Record<SpotifyAccessTokenScope, string | undefined> = {
  'playback-state': process.env.SPOTIFY_PLAYBACK_STATE_REFRESH_TOKEN,
  'recently-played': process.env.SPOTIFY_RECENTLY_PLAYED_REFRESH_TOKEN,
  'currently-playing': process.env.SPOTIFY_CURRENTLY_PLAYING_REFRESH_TOKEN,
  'top-read': process.env.SPOTIFY_TOP_READ_REFRESH_TOKEN,
  'user-modify-playback-state': process.env.SPOTIFY_USER_MODIFY_PLAYBACK_STATE_REFRESH_TOKEN,
  private: undefined,
};

const createSpotifyTokenBody = (type: 'authorization_code' | 'refresh_token', refreshToken: string) => {
  if (type === 'authorization_code') {
    return stringify({
      grant_type: 'authorization_code',
      code: refreshToken,
      redirect_uri: 'http://localhost:3000',
    });
  }

  return stringify({
    grant_type: 'refresh_token',
    refresh_token: refreshToken,
  });
};

export const getSpotifyToken = async (scope: SpotifyAccessTokenScope) => {
  const scopeRefreshToken = SCOPE_REFRESH_TOKEN_MAP[scope];
  if (!scopeRefreshToken) {
    throw new Error(`Refresh token for scope "${scope}" is not defined.`);
  }

  const body = createSpotifyTokenBody('refresh_token', scopeRefreshToken);
  const response = await fetch(`${SPOTIFY_ACCOUNTS_API_URL}/api/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${authorizationClientID}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(
      `Failed to fetch Spotify access token: ${response.status} ${response.statusText} - ${JSON.stringify(errorData)}`,
    );
  }

  const data = await response.json();
  const parsedData = SpotifyTokenSchema.safeParse(data);

  if (!parsedData.success) {
    throw new Error(`Could not parsed token response: ${parsedData.error}`);
  }

  return parsedData.data.access_token;
};

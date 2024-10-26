import { z } from 'zod';

export type SpotifyDevice = {
  name: string;
  type: string;
  volume: number;
};

export type SpotifyItem = {
  id: string;
  album: SpotifyAlbum;
  name: string;
  artists: string;
  url: string;
  durationMS: number;
  itemPreviewURL: string | null;
};

export type SpotifyAlbum = {
  name: string;
  artists: string;
  url: string;
  imageURL: string;
};

export type ServerArtist = {
  name: string;
};

export type ServerSpotifyItem = {
  id: string;
  artists: ServerArtist[];
  album: {
    name: string;
    artists: ServerArtist[];
    external_urls: {
      spotify: string;
    };
    images: {
      url: string;
    }[];
  };
  name: string;
  external_urls: {
    spotify: string;
  };
  duration_ms: number;
  preview_url: string | null;
};

export const SpotifyPlaybackSchema = z.object({
  device: z.object({
    name: z.string(),
    type: z.string(),
    volume_percent: z.number(),
  }),
  item: z.any().nullable(),
  progress_ms: z.number(),
  is_playing: z.boolean(),
  currently_playing_type: z.string(),
});

export const SpotifyQueueSchema = z.object({
  queue: z.array(z.any()),
});

export const SpotifyTopTracksSchema = z.object({
  items: z.array(z.any()),
});

export type GetCurrentPlaybackResponse = {
  device: SpotifyDevice;
  item: SpotifyItem | null;
  progressMS: number;
  isPlaying: boolean;
  isPlayingPodcast: boolean;
  volumePercent: number;
  trackQueue: SpotifyItem[];
};

export type SpotifyTopTimeRange = 'short_term' | 'medium_term' | 'long_term';

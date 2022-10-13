export type SpotifyDevice = {
  name: string;
  type: string;
  volume: number;
};

export type SpotifyItem = {
  id: string;
  album?: SpotifyAlbum;
  name: string;
  artists: [string];
  url: string;
  durationMS: number;
  itemPreviewURL: string;
};

export type SpotifyAlbum = {
  name: string;
  artists: [string];
  url: string;
  imageURL: string;
};

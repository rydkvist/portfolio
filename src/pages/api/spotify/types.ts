export type SpotifyDevice = {
  name: string;
  type: string;
  volume: number;
};

export type SpotifyItem = {
  album?: SpotifyAlbum;
  name: string;
  artists: [string];
  url: string;
  durationMS: number;
  itemPreviewURL: string;
  id: string;
};

export type SpotifyAlbum = {
  name: string;
  artists: [string];
  url: string;
  imageURL: string;
};

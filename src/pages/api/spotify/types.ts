export type SpotifyDevice = {
  name: string;
  type: string;
  volume: number;
};

export type SpotifyItem = {
  id: string;
  album?: SpotifyAlbum;
  name: string;
  artists: string;
  url: string;
  durationMS: number;
  itemPreviewURL: string;
};

export type SpotifyAlbum = {
  name: string;
  artists: string;
  url: string;
  imageURL: string;
};

type ServerArtist = {
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
  preview_url: string;
};

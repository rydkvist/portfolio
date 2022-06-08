import { API_SPOTIFY_URL, getSpotifyAccessToken } from '../spotify';

const NOW_PLAYING_ENDPOINT = `${API_SPOTIFY_URL}/me/player/currently-playing`;

const getNowPlaying = async () => {
  const { access_token } = await getSpotifyAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const fetchNowPlaying = async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map(_artist => _artist.name).join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};

export default fetchNowPlaying;

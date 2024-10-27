import SpotifyPlayback from '@/features/spotify/components/spotify-playback';
import SpotifyTopTracks from '@/features/spotify/components/SpotifyTopTracks/spotify-top-tracks';

const Music = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Music</h1>
      <p className="description text-neutral-700 dark:text-neutral-300 w-100 mb-4">Explore some of my music taste 🎧</p>

      <SpotifyPlayback />
      <SpotifyTopTracks />
    </>
  );
};

export default Music;

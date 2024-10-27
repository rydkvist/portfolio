import { PageWrapper } from '@/_components/old/PageWrapper';
import SpotifyPlayback from '@/_domains/music/spotify-playback';
import SpotifyTopTracks from '@/_domains/music/SpotifyTopTracks/spotify-top-tracks';

const Music = () => {
  return (
    <PageWrapper>
      <h1 className="text-center">Music</h1>
      <p className="text-neutral-700 dark:text-neutral-300 w-100 mb-4">Explore some of my music taste 🎧</p>

      <SpotifyPlayback />
      <SpotifyTopTracks />
    </PageWrapper>
  );
};

export default Music;
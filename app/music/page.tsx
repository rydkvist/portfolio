import Playback from '@/features/spotify/components/playback/playback';
import TopTracks from '@/features/spotify/components/top-tracks/top-tracks';

const Music = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Music</h1>
      <p className="description w-100 mb-4 text-neutral-700 dark:text-neutral-300">Explore some of my music taste 🎧</p>

      <Playback />
      <hr className="my-2" />
      <TopTracks />
    </>
  );
};

export default Music;

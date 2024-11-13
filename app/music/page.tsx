import Playback from '@/features/spotify/components/playback/playback';
import TopTracks from '@/features/spotify/components/top-tracks/top-tracks';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
};

const Music = () => {
  return (
    <>
      <h1 className="size-xxl text-center">Music</h1>
      <p className="description mb-4 text-center text-neutral-700 dark:text-neutral-300">
        Explore some of my music taste 🎧
      </p>

      <Playback />
      <div className="my-2" />
      <TopTracks />
    </>
  );
};

export default Music;

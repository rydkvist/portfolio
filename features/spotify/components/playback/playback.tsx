import Image from 'next/image';

import { ReactNode } from 'react';
import { PlaybackContent } from './playback-content';

const Playback = () => (
  <PlaybackWrapper>
    <PlaybackContent />
  </PlaybackWrapper>
);

const PlaybackWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full scale-105 rounded-md shadow-xl md:w-96">
    <div className="relative h-auto w-full flex-col items-start rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800">
      <span className="absolute right-4 top-2">
        <Image src="/images/companies/Spotify.png" height={32} width={32} alt="Spotify Logo" />
      </span>
      {children}
    </div>
  </div>
);

export default Playback;

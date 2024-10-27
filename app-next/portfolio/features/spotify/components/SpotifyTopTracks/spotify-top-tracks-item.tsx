import Image from 'next/image';
import { SpotifyItem } from '../../server/types';

type SpotifyTopTracksItemProps = {
  track: SpotifyItem;
  index: number;
};

export const SpotifyTopTracksItem = ({ track }: SpotifyTopTracksItemProps) => {
  return (
    <a
      href={track.url}
      target="_blank"
      rel="noreferrer"
      title={track.name}
      className="mb-4 mr-0 mt-1 flex w-full flex-row items-start rounded-md bg-neutral-200 p-2 shadow-sm transition-transform hover:scale-105 focus:scale-105 md:mr-6 md:w-64 dark:bg-neutral-700"
    >
      <span className="relative mr-2 h-12 w-12 overflow-hidden rounded-sm">
        {track.album?.imageURL && <Image src={track.album.imageURL} alt={track.name} layout="fill" objectFit="cover" />}
      </span>

      <div className="flex flex-col">
        <p className="leading-5 text-neutral-800 dark:text-neutral-200">{track.name}</p>
        <p className="text-xs text-neutral-700 dark:text-neutral-300">{track.artists}</p>
      </div>
    </a>
  );
};

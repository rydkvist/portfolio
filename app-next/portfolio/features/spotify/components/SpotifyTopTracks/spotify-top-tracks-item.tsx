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
      className="flex flex-row w-full md:w-64 items-start bg-neutral-200 dark:bg-neutral-700 shadow-sm p-2 rounded-md mt-1 mb-4 mr-0 md:mr-6 transition-transform focus:scale-105 hover:scale-105"
    >
      <span className="overflow-hidden rounded-sm w-12 h-12 relative mr-2">
        {track.album?.imageURL && <Image src={track.album.imageURL} alt={track.name} layout="fill" objectFit="cover" />}
      </span>

      <div className="flex flex-col">
        <p className="text-neutral-800 dark:text-neutral-200 leading-5">{track.name}</p>
        <p className="text-xs text-neutral-700 dark:text-neutral-300">{track.artists}</p>
      </div>
    </a>
  );
};

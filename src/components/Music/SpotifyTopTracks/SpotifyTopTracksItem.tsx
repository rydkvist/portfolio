import { SpotifyItem } from '../../../pages/api/spotify/types';
import { navigationAccessibilityClass } from '../../Navigation/NavigationIcons';

type SpotifyTopTracksItemProps = {
  track: SpotifyItem;
  index: number;
};

export const SpotifyTopTracksItem = ({ track, index }: SpotifyTopTracksItemProps) => {
  return (
    <a
      key={index}
      href={track.url}
      target="_blank"
      rel="noreferrer"
      title={track.name}
      className={`flex flex-row w-full md:w-64 items-start bg-neutral-200 dark:bg-neutral-700 shadow-sm p-2 rounded-md mt-1 mb-4 mr-0 md:mr-6 transition-all focus:scale-105 hover:scale-105 ${navigationAccessibilityClass}`}
    >
      <span className="overflow-hidden rounded-sm mr-2">
        <img src={track.album.imageURL} alt={track.name} width={48} height={48} />
      </span>

      <div className="flex flex-col">
        <p className="text-neutral-800 dark:text-neutral-200 leading-5 ">{track.name}</p>
        <p className="text-xs text-neutral-700 dark:text-neutral-300">{track.artists}</p>
      </div>

      <div className="mt-auto ml-4">{/* TODO: Add play button */}</div>
    </a>
  );
};

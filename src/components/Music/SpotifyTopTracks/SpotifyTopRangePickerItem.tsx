import { SpotifyTopTimeRange } from '../../../pages/api/spotify/top-tracks';
import { getSpotifyTopTimeRangeLabel } from './SpotifyTopRangePicker';

type SpotifyTopRangePickerItemProps = {
  timeRange: SpotifyTopTimeRange;
  currentTimeRange: SpotifyTopTimeRange;
  setSelectedTimeRange: (timeRange: SpotifyTopTimeRange) => void;
};

export const SpotifyTopRangePickerItem = ({
  timeRange,
  currentTimeRange,
  setSelectedTimeRange,
}: SpotifyTopRangePickerItemProps) => {
  const isSelected = currentTimeRange === timeRange;

  return (
    <button
      className={`text-sm rounded-md cursor-pointer px-5 py-1 transition-all hover:bg-neutral-50 dark:hover:bg-neutral-400 ${
        isSelected ? 'bg-neutral-100 dark:bg-neutral-500' : 'bg-inherit'
      }`}
      onClick={() => setSelectedTimeRange(timeRange)}
    >
      {getSpotifyTopTimeRangeLabel(timeRange)}
    </button>
  );
};

import { SpotifyTopTimeRange } from '../../../pages/api/spotify/top-tracks';
import { SpotifyTopRangePickerItem } from './SpotifyTopRangePickerItem';

type SpotifyTopRangePickerProps = {
  selectedTimeRange: SpotifyTopTimeRange;
  setSelectedTimeRange: (timeRange: SpotifyTopTimeRange) => void;
};

export const SpotifyTopRangePicker = ({ selectedTimeRange, setSelectedTimeRange }: SpotifyTopRangePickerProps) => (
  <div className="flex bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 items-center justify-center p-1 rounded-lg shadow-sm">
    <SpotifyTopRangePickerItem
      timeRange="short_term"
      currentTimeRange={selectedTimeRange}
      setSelectedTimeRange={setSelectedTimeRange}
    />
    <SpotifyTopRangePickerItem
      timeRange="medium_term"
      currentTimeRange={selectedTimeRange}
      setSelectedTimeRange={setSelectedTimeRange}
    />
    <SpotifyTopRangePickerItem
      timeRange="long_term"
      currentTimeRange={selectedTimeRange}
      setSelectedTimeRange={setSelectedTimeRange}
    />
  </div>
);

export const getSpotifyTopTimeRangeLabel = (timeRange: SpotifyTopTimeRange) => {
  switch (timeRange) {
    case 'short_term':
      return 'Last 4 weeks';
    case 'medium_term':
      return 'Last 6 months';
    case 'long_term':
      return 'All time';
    default:
      return 'Last 4 weeks';
  }
};

'use client';

import { SpotifyTopTimeRange } from '../../server/types';

interface SpotifyTopTracksRangePickerProps {
  selectedTimeRange: SpotifyTopTimeRange;
  setSelectedTimeRange: (timeRange: SpotifyTopTimeRange) => void;
}

export const SpotifyTopTracksRangePicker = ({
  selectedTimeRange,
  setSelectedTimeRange,
}: SpotifyTopTracksRangePickerProps) => {
  const timeRanges: SpotifyTopTimeRange[] = ['short_term', 'medium_term', 'long_term'];

  const getSpotifyTopTimeRangeLabel = (timeRange: SpotifyTopTimeRange): string => {
    switch (timeRange) {
      case 'short_term':
        return 'Last Month';
      case 'medium_term':
        return 'Last 6 Months';
      case 'long_term':
        return 'All Time';
      default:
        return '';
    }
  };

  return (
    <div className="flex space-x-2">
      {timeRanges.map(timeRange => {
        const isSelected = selectedTimeRange === timeRange;

        return (
          <button
            key={timeRange}
            onClick={() => setSelectedTimeRange(timeRange)}
            className={`cursor-pointer rounded-md px-5 py-1 text-sm transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-400 ${
              isSelected ? 'bg-neutral-100 dark:bg-neutral-500' : 'bg-inherit'
            }`}
            aria-pressed={isSelected}
            aria-label={getSpotifyTopTimeRangeLabel(timeRange)}
          >
            {getSpotifyTopTimeRangeLabel(timeRange)}
          </button>
        );
      })}
    </div>
  );
};

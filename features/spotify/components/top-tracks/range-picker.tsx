'use client';

import { cva } from 'class-variance-authority';
import { SpotifyTopTimeRange } from '../../server/types';

interface RangePickerProps {
  selectedTimeRange: SpotifyTopTimeRange;
  setSelectedTimeRange: (timeRange: SpotifyTopTimeRange) => void;
}

export const RangePicker = ({ selectedTimeRange, setSelectedTimeRange }: RangePickerProps) => {
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
    <div className="flex items-center justify-center space-x-2 rounded-lg bg-neutral-200 p-1 text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-neutral-100">
      {timeRanges.map(timeRange => {
        const isSelected = selectedTimeRange === timeRange;

        return (
          <button
            key={timeRange}
            onClick={() => setSelectedTimeRange(timeRange)}
            className={styles.buttonWrapper({ isActive: isSelected })}
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

const styles = {
  buttonWrapper: cva(
    'text-sm rounded-md cursor-pointer px-5 py-1 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-400',
    {
      variants: {
        isActive: {
          true: 'bg-neutral-100 dark:bg-neutral-500',
          false: 'bg-inherit',
        },
      },
    },
  ),
};

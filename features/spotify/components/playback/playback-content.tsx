'use client';

import Image from 'next/image';

import { Spinner } from '@/components/Spinner';
import { calculateProgressPercentage, formatDuration } from '@/utils/helpers';
import { usePlayback } from './usePlayback';
import { SpotifyItem } from '../../server/types';

const labels = {
  loadingPlaybackLabel: 'Fetching music playback...',
  errorPlaybackTitle: 'Music playback not found',
  playbackTitle: 'Now listening',
  nextTrackLabel: 'Coming up next',
};

export function PlaybackContent() {
  const { data, error, isLoading, playback } = usePlayback();

  if (isLoading) {
    return <LoadingUI />;
  }

  if (error) {
    return <ErrorUI error={error} />;
  }

  if (!data) {
    return <ErrorUI error={undefined} />;
  }

  const { isPlaying, item, trackQueue } = data;

  if ((!item && !isPlaying) || !item) {
    return (
      <p className="mr-4 w-full text-lg text-neutral-700 dark:text-neutral-300">
        {data?.isPlayingPodcast ? 'Listening to a podcast' : 'Offline'}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{labels.playbackTitle}</p>
      <div className="inline-flex items-center gap-3 pb-2.5 pt-1 md:pb-2">
        <a
          target="_blank"
          rel="noreferrer"
          href={item.album.url}
          title={item.name}
          className="relative transition-transform hocus:scale-110"
        >
          <Image
            style={{ objectFit: 'contain' }}
            src={item.album.imageURL}
            alt={item.album.name}
            width={72}
            height={72}
          />
        </a>

        <div className="max-w-2xl flex-1 overflow-hidden">
          <p className="font-semibold leading-6 text-neutral-900 dark:text-neutral-100">{item.name}</p>
          <p className="w-full truncate text-sm text-neutral-700 dark:text-neutral-300">{item.artists}</p>
        </div>
      </div>

      <ProgressBar timeElapsed={playback?.time} durationMS={item.durationMS} />
      {trackQueue.length && <TrackQueue trackQueue={trackQueue} />}
    </div>
  );
}

const ProgressBar = ({ timeElapsed, durationMS }: { timeElapsed: number | undefined; durationMS: number }) => {
  const progressPercentage = calculateProgressPercentage(timeElapsed || 0, durationMS);

  return (
    <div className="space-y-1">
      <div className="h-1 w-full overflow-hidden rounded-sm bg-neutral-400">
        <div
          className="h-full bg-neutral-600 transition-all ease-linear dark:bg-neutral-200"
          style={{
            width: `${progressPercentage}%`,
          }}
        />
      </div>
      <div className="flex flex-row justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
        <p>{formatDuration(timeElapsed)}</p>
        <p>{formatDuration(durationMS)}</p>
      </div>
    </div>
  );
};

const TrackQueue = ({ trackQueue }: { trackQueue: SpotifyItem[] }) => (
  <div className="mt-2 inline-flex w-full items-center justify-between gap-1">
    <p className="flex-1 text-sm text-neutral-600 dark:text-neutral-400">{labels.nextTrackLabel}</p>

    <div className="flex flex-row gap-2">
      {trackQueue.map(track => (
        <a
          key={track.id}
          target="_blank"
          rel="noreferrer"
          href={track.album.url}
          title={track.name}
          className="z-0 overflow-hidden rounded-sm shadow-md transition-transform hocus:scale-125"
        >
          <Image
            src={track.album.imageURL}
            alt={track.album.name}
            style={{ objectFit: 'contain' }}
            height={32}
            width={32}
          />
        </a>
      ))}
    </div>
  </div>
);

const LoadingUI = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-4">
    <Spinner />
    <p className="text-center text-neutral-700 dark:text-neutral-300">{labels.loadingPlaybackLabel}</p>
  </div>
);

const ErrorUI = ({ error }: { error: unknown }) => (
  <div className="space-y-2">
    <p className="w-full font-medium text-neutral-900 dark:text-neutral-100">{labels.errorPlaybackTitle}</p>
    <p className="text-sm text-neutral-700 dark:text-neutral-300">
      Reason: {error instanceof Error ? error.message : String(error)}
    </p>
  </div>
);

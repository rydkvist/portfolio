'use client';
import useSWR from 'swr';
import { GetCurrentPlaybackResponse } from '../../server/types';
import { useEffect, useState } from 'react';

const fetchCurrentPlayback = async (endpoint: string): Promise<GetCurrentPlaybackResponse> => {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed to fetch current playback');
    }
    return res.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Something went wrong');
  }
};

export const usePlayback = () => {
  const {
    data,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR('/api/spotify/current-playback', fetchCurrentPlayback, {
    refreshInterval: 5000,
  });

  const [playback, setPlayback] = useState<{
    time: number;
    id: string;
  } | null>(null);

  const isPlaying = data?.isPlaying;
  const timeElapsedOnLoad = data?.progressMS;
  const song = data?.item;

  useEffect(() => {
    if (!song || !timeElapsedOnLoad) return;

    const isDifferentSong = playback?.id !== song.id;
    if (!playback || isDifferentSong) {
      setPlayback({
        id: song.id,
        time: timeElapsedOnLoad,
      });
    }

    const currentTime = playback?.time ?? timeElapsedOnLoad;
    const hasFinishedTrack = currentTime >= song.durationMS;

    if (hasFinishedTrack) {
      setPlayback(null);
      refetch();
    }

    const timer = setInterval(() => {
      if (!hasFinishedTrack) {
        setPlayback({
          id: song.id,
          time: currentTime + 1000,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [playback, refetch, song, timeElapsedOnLoad]);

  return {
    isLoading,
    error,
    data,
    playback,
  };
};

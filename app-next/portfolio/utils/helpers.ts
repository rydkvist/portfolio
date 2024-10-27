export const calculateProgressPercentage = (elapsedMs: number, totalMs: number): number => {
  if (totalMs <= 0) {
    return 0;
  }

  const percentage = (elapsedMs / totalMs) * 100;
  return Math.min(Math.max(percentage, 0), 100);
};

export const formatDuration = (milliseconds?: number): string => {
  if (milliseconds === undefined || milliseconds < 0) {
    return '0:00';
  }

  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const currentYear = new Date().getFullYear().toString();

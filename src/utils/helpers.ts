import { Theme } from '../context/SettingsProvider';

export const getBrowserTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const theme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return theme;
};

export const msToMinutesAndSeconds = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
};

export const msDifferenceToPercentage = (ms1: number, ms2: number) => {
  return (ms1 / ms2) * 100;
};

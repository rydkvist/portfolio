import { Theme } from '../context/SettingsProvider';

export const getBrowserTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const theme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return theme;
};

export const msToMinutesAndSeconds = (ms?: number) => {
  if (!ms) {
    return '0:00';
  }

  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
};

export const msDifferenceToPercentage = (ms1: number, ms2: number) => {
  return (ms1 / ms2) * 100;
};

type Parameter = string | number | Date;

export const toQueryString = (keyValuePairs: Record<string, Parameter | undefined>): string => {
  if (!keyValuePairs) {
    return '';
  }
  const entries = Object.entries(keyValuePairs).filter(
    ([, value]) => typeof value !== 'undefined' && value !== null
  ) as [string, Parameter][];
  if (entries.length === 0) {
    return '';
  }
  return `?${entries.map(([key, value]: [string, Parameter]) => `${key}=${value}`).join('&')}`;
};

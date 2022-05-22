import { Theme } from '../context/SettingsProvider';

export const getBrowserTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const theme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return theme;
};

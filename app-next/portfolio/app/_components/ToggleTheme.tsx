'use client';
import { useEffect, useState } from 'react';

type ThemeType = 'dark' | 'light';

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const label = theme === 'dark' ? 'Toggle to light mode' : 'Toggle to dark mode';

  useEffect(() => {
    const userStoredPreference = storageGetPreference();
    const browserPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    const clientTheme = userStoredPreference || browserPreference;
    setTheme(clientTheme);
  }, []);

  useEffect(() => {
    updateDocumentTheme(theme);
  }, [theme]);

  const onToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    storageStorePreference(newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      title={label}
      className="text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600 rounded-lg text-sm p-2.5 transition-transform active:scale-95"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

const storageStorePreference = (preference: ThemeType) => {
  return localStorage.setItem('theme', preference);
};

const storageGetPreference = () => {
  return localStorage.getItem('theme') as ThemeType | undefined;
};

const updateDocumentTheme = (newTheme: ThemeType) => {
  if (newTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }
};

const SunIcon = () => (
  <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

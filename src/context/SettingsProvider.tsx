import { createContext, useContext, useEffect, useState } from 'react';
import { getBrowserTheme } from '../utils/helpers';

export type Theme = 'light' | 'dark';

type SettingsContextType = {
  theme: Theme;
  isContactModalOpen: boolean;
  toggleTheme: () => void;
  setIsContactModalOpen: (_isOpen: boolean) => void;
};

const getLastSelectedTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const lastStoredTheme = localStorage.getItem('theme') as Theme;

    if (lastStoredTheme) {
      return lastStoredTheme;
    } else {
      return getBrowserTheme();
    }
  } else {
    return getBrowserTheme();
  }
};

export const SettingsContext = createContext<SettingsContextType>({
  theme: getBrowserTheme(),
  isContactModalOpen: false,
  toggleTheme: () => null,
  setIsContactModalOpen: () => null,
});

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const onSetTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);

    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    onSetTheme(getLastSelectedTheme());
  }, []);

  const toggleTheme = () => {
    onSetTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <SettingsContext.Provider value={{ theme, isContactModalOpen, toggleTheme: toggleTheme, setIsContactModalOpen }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

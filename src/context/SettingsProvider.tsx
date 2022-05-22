import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

type SettingsContextType = {
  theme: Theme;
  isContactModalOpen: boolean;
  toggleTheme: () => void;
  setIsContactModalOpen: (_isOpen: boolean) => void;
};

const getBrowserTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const theme = window?.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return theme;
};

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const lastStoredTheme = localStorage.getItem('theme') as Theme;
    return lastStoredTheme;
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
  const [theme, setTheme] = useState<Theme>(getBrowserTheme());
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const onSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    onSetTheme(getInitialTheme());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    onSetTheme(newTheme);
  };

  return (
    <SettingsContext.Provider value={{ theme, isContactModalOpen, toggleTheme: toggleTheme, setIsContactModalOpen }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);

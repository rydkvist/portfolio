import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
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

export const ThemeContext = createContext<ThemeContextType>({
  theme: getBrowserTheme(),
  toggleTheme: () => null,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getBrowserTheme());

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

  return <ThemeContext.Provider value={{ theme, toggleTheme: toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

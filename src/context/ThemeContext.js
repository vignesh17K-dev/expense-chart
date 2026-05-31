import { createContext, useContext, useEffect, useState } from 'react';
import { COLOR_THEMES, THEME_META } from '../styles/themeConfig';

const ThemeContext = createContext();

const VALID_COLORS = COLOR_THEMES.map((t) => t.id);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('theme-mode');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [colorTheme, setColorTheme] = useState(() => {
    const saved = localStorage.getItem('theme-color');
    return VALID_COLORS.includes(saved) ? saved : 'indigo';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    document.documentElement.setAttribute('data-color', colorTheme);
    localStorage.setItem('theme-mode', mode);
    localStorage.setItem('theme-color', colorTheme);

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', THEME_META[colorTheme][mode]);
    }
  }, [mode, colorTheme]);

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  function setThemeColor(id) {
    if (VALID_COLORS.includes(id)) {
      setColorTheme(id);
    }
  }

  return (
    <ThemeContext.Provider
      value={{ mode, colorTheme, toggleMode, setThemeColor, colorThemes: COLOR_THEMES }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

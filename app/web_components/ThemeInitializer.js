'use client';

import { useTheme } from '../context/ThemeContex';
import { useEffect } from 'react';

const ThemeInitializer = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return null;
};

export default ThemeInitializer;
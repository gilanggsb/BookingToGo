/* context/ThemeContext.js */

import {
  ThemeProviderProps,
  ThemeContextType,
  ThemeState,
  ThemeColors,
} from '@type/context';
import {Colors, DarkColors} from '@utils/constants';
import {StorageService} from '@utils/services';
import React, {createContext, useState, useEffect, useContext} from 'react';

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  themeColors: Colors,
  switchTheme: () => {},
  toggleTheme: theme => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<ThemeState>('light');

  useEffect(() => {
    // Load saved theme from storage
    const getTheme = async () => {
      try {
        const resSavedTheme = await StorageService.getFromStorage({
          key: 'theme',
        });

        if (resSavedTheme?.data) {
          setTheme(resSavedTheme.data);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = (newTheme: ThemeState) => {
    setTheme(newTheme);
    StorageService.saveToStorage({key: 'theme', data: newTheme});
  };

  const switchTheme = () => {
    const newTheme: ThemeState = theme == 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    StorageService.saveToStorage({key: 'theme', data: newTheme});
  };

  const themeColors = theme === 'light' ? Colors : DarkColors;

  return (
    <ThemeContext.Provider
      value={{theme, themeColors, toggleTheme, switchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

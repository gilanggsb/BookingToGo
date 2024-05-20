import ThemeContext from '@states/context/ThemeContext';
import {useContext} from 'react';

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);
  return {...themeContext};
};

export {useThemeContext};

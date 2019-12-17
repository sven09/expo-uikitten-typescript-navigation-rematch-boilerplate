import { IRootState, Dispatch } from '../store';
import { dark, light } from '@eva-design/eva';

const defaultTheme = dark;

const customTheme = { // see eva design for generating custom themes
  ...light,

  'color-primary-100': '#E1FBCD',
  'color-primary-200': '#BDF89C',
  'color-primary-300': '#8DEC69',
  'color-primary-400': '#60D943',
  'color-primary-500': '#23C00F',
  'color-primary-600': '#10A50A',
  'color-primary-700': '#078A0D',
  'color-primary-800': '#046F12',
  'color-primary-900': '#025C15',

};

enum THEMES {
  light = 'light',
  dark = 'dark',
  custom = 'custom'
}

export const common = {
  state: {
    activeTheme: defaultTheme
  },
  reducers: {
    setTheme(state, newTheme: THEMES) {
      switch (newTheme) {
        case THEMES.dark:
          return { ...state, activeTheme: dark };
        case THEMES.light:
          return { ...state, activeTheme: light };
        case THEMES.custom:
          return { ...state, activeTheme: customTheme };
        default:
          return {
            ...state,
            activeTheme: defaultTheme
          };
      }
    }
  },
  effects: dispatch => ({})
};

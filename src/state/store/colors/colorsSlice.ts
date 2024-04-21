import {createSlice} from '@reduxjs/toolkit';
import {ColorsState} from './types';
import {Appearance} from 'react-native';
import {
  COLOR_DEFINITIONS,
  COLOR_MODE_TYPES,
  dark_mode_colors,
  light_mode_colors,
} from '../../../resources/colors';

const initialState: ColorsState = {
  mode: 'custom',
  colors:
    Appearance.getColorScheme() === 'dark'
      ? dark_mode_colors
      : light_mode_colors,
};

export const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    setColorMode: (
      state: {colors: COLOR_DEFINITIONS; mode: COLOR_MODE_TYPES},
      action: {payload: COLOR_MODE_TYPES},
    ) => {
      state.mode = !action.payload
        ? Appearance.getColorScheme() || 'light'
        : action.payload;
      state.colors =
        ((!action.payload || action.payload === 'custom') &&
          Appearance.getColorScheme() === 'dark') ||
        action.payload === 'dark'
          ? dark_mode_colors
          : light_mode_colors;
    },
  },
});

export const {setColorMode} = colorsSlice.actions;
export default colorsSlice.reducer;

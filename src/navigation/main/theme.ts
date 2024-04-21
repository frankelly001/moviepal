import {DefaultTheme, Theme} from '@react-navigation/native';
import {COLOR_DEFINITIONS} from '../../resources/colors';

export const navigationTheme = ({
  colors,
}: {
  colors: COLOR_DEFINITIONS;
}): Theme => ({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.highlight_5,
    background: colors.neutral_light_1,
  },
});

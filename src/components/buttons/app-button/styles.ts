import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS, COLOR_KEYS} from '../../../resources/colors';
import {wp} from '../../../resources/config';

export const appBtnStyles = ({
  colors,
  buttonColor = 'highlight_5',
  disabled,
  borderRadius,
  borderWidth,
  borderColor = 'transparent',
}: {
  colors?: COLOR_DEFINITIONS;
  disabled?: boolean;
  buttonColor?: COLOR_KEYS;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: COLOR_KEYS;
} = {}) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: wp(16),
      paddingVertical: wp(12),
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      height: wp(48),
      opacity: disabled ? 0.5 : 1,
      backgroundColor: colors?.[buttonColor],
      borderRadius,
      borderWidth,
      borderColor: colors?.[borderColor],
    },
  });

import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';
import {typography} from '../../../resources/fonts';
import {wp} from '../../../resources/config';

export const appInputStyles = ({
  colors,
  isFocus,
  isDisabled,
}: {
  colors?: COLOR_DEFINITIONS;
  isFocus?: boolean;
  isDisabled?: boolean;
} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    inputContainer: {
      borderWidth: isFocus ? 1.5 : 1,
      borderColor: colors?.[isFocus ? 'highlight_5' : 'neutral_light_5'],
      flexDirection: 'row',
      borderRadius: wp(12),
      alignItems: 'center',
      marginTop: wp(8),
      height: wp(48),
      opacity: isDisabled ? 0.5 : 1,
    },
    inputView: {
      flex: 1,
      paddingHorizontal: wp(16),
    },
    inputField: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      flex: 1,
      color: colors?.neutral_dark_5,
      textDecorationLine: 'none',
      ...typography.body_s,
    },
    iconContainer: {paddingHorizontal: wp(15)},
  });

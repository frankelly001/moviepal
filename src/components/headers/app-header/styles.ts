import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';
import {wp} from '../../../resources/config';

export const appHeaderStyle = ({colors}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: colors?.neutral_light_1,
      alignItems: 'center',
      paddingLeft: wp(20),
      paddingRight: wp(24),
      borderTopWidth: 0,
      borderBottomWidth: 0,
      overflow: 'hidden',
      height: wp(50),
    },
    left: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
    },
    middle: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
      height: '100%',
    },
    right: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
    },
  });

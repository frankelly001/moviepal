import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../resources/colors';
import {wp} from '../../resources/config';

export const bottomTabStyles = ({colors}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    createTabBtn: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: wp(38) / 2,
      backgroundColor: colors?.highlight_5,
      width: wp(38),
      height: wp(38),
    },
    tabBtnContainer: {flex: 1, alignSelf: 'center'},
  });

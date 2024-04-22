import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';

export const appScreenStyles = ({colors}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    flex1: {flex: 1},
    container: {overflow: 'hidden'},
    screenBackground: {backgroundColor: colors?.neutral_light_1},
  });

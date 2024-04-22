import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';
import {wp} from '../../../resources/config';

export const appearanceSheetStyles = ({
  colors,
}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    createItemBtnContainer: {flex: 1},
    createItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(16),
    },
    createItemBtn: {
      borderWidth: 0.5,
      borderRadius: wp(12),
      marginVertical: wp(4),
      borderColor: colors?.neutral_light_5,
    },
    createItemSelected: {
      backgroundColor: colors?.highlight_1,
      borderColor: colors?.highlight_1,
    },
    itemTitle: {paddingHorizontal: wp(16), flex: 1},
  });

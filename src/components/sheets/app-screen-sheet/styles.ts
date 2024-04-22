import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';
import {SCREEN_HEIGHT, isIOS, wp} from '../../../resources/config';

export const appScreenSheetStyles = ({
  colors,
}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors?.neutral_light_1,
      flex: 1,
      height: SCREEN_HEIGHT * 0.95,
      paddingBottom: wp(isIOS ? 20 : 50),
    },
    modal: {backgroundColor: colors?.neutral_light_1, flex: 1},
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: wp(20),
    },
    header: {flex: 1},
    closeBtn: {
      position: 'absolute',
      right: 24,
      justifyContent: 'center',
    },
    contentContainer: {padding: wp(16), flex: 1},
  });

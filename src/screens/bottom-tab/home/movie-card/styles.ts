import {StyleSheet} from 'react-native';
import {wp} from '../../../../resources/config';
import {COLOR_DEFINITIONS} from '../../../../resources/colors';

export const movieCardStyles = ({colors}: {colors: COLOR_DEFINITIONS}) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imgContainer: {
      flex: 1,
      height: wp(200),
      borderRadius: wp(10),
      overflow: 'hidden',
    },
    img: {flex: 1, backgroundColor: colors.highlight_1},
    details: {paddingVertical: wp(8), gap: wp(5)},
  });

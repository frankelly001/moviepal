import {StyleSheet} from 'react-native';
import {COLOR_DEFINITIONS} from '../../../resources/colors';
import {wp} from '../../../resources/config';

export const detailStyles = ({colors}: {colors?: COLOR_DEFINITIONS} = {}) =>
  StyleSheet.create({
    posterContainer: {marginBottom: wp(60)},
    posterCover: {height: wp(210)},
    img: {flex: 1, backgroundColor: colors?.highlight_1},
    rateContainer: {
      position: 'absolute',
      right: 0,
      top: wp(10),
      paddingHorizontal: wp(8),
      paddingVertical: wp(4),
      flexDirection: 'row',
      gap: wp(4),
      alignItems: 'center',
    },
    rateBackGround: {
      borderBottomLeftRadius: wp(8),
      borderTopLeftRadius: wp(8),
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors?.neutral_dark_4,
    },
    detailContainer: {
      position: 'absolute',
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: wp(16),
      bottom: -wp(60),
      left: wp(20),
      right: wp(20),
    },
    imgPoster: {
      height: wp(120),
      width: wp(95),
      borderRadius: wp(10),
      overflow: 'hidden',
    },
    titleContainer: {
      flex: 1,
      paddingVertical: wp(4),
      maxHeight: wp(120),
    },
    contentContainer: {paddingHorizontal: wp(20), marginTop: wp(16)},
    pillContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: wp(8),
    },
    pill: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
    },
    serpaerator: {
      height: wp(15),
      width: 1,
      backgroundColor: colors?.neutral_dark_2,
    },
  });

export const otherDetailsStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(24),
    gap: wp(24),
  },
  header: {borderBottomWidth: 5, paddingVertical: 10},
  detailConatiner: {marginTop: 16},
  detail: {marginBottom: 10},
});

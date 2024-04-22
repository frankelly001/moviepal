import {StyleSheet} from 'react-native';
import {wp} from '../../../resources/config';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(20),
  },
  headerContainer: {
    paddingHorizontal: wp(20),
    paddingVertical: wp(16),
    gap: wp(16),
  },
  flex1: {flex: 1},
  gap16: {gap: wp(16)},
});

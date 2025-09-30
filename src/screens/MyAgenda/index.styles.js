import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding + 4,
    paddingHorizontal: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
  width: {
    width: '100%',
  },
  btn: {
    width: SIZES.padding2 * 7.9,
    height: SIZES.padding + 4,
  },
  flex: {
    flex: 1,
  },
  flatList: {
    gap: SIZES.padding2 + 4,
  },
});

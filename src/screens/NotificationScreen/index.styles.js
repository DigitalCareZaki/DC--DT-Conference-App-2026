import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
  },

  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
  flex: {
    flex: 1,
  },
});

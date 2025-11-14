import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.normal,
    paddingVertical: SIZES.padding,
  },

  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    padding: SIZES.normal,
    borderRadius: SIZES.normal,
  },
  flex: {
    flex: 1,
  },
});

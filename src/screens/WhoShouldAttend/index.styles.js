import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.light_purple,
    padding: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
    gap: SIZES.padding2 + 4,
  },
});

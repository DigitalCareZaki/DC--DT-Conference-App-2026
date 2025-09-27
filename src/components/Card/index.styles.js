import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  grid: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding - 4,
    borderRadius: SIZES.padding - 4,
  },

  gap: {
    gap: SIZES.padding2 - 5,
  },
});

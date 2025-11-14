import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  grid: {
    backgroundColor: COLORS.primary,
    padding: SIZES.normal,
    borderRadius: SIZES.normal,
  },

  gap: {
    gap: SIZES.padding2 - 5,
  },
});

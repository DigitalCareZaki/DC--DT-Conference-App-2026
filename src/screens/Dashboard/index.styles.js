import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
  },
  itemContainer: {
    width: SIZES.padding * 8,
    height: 108,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2 + 4,
    paddingHorizontal: 5,
  },
});

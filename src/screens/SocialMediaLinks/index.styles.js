import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingTop: SIZES.padding,
  },
  link_view: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
});

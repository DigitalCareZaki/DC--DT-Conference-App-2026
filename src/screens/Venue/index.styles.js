import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  top_view: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.normal,
    marginTop: SIZES.padding,
    paddingVertical: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
  },
});

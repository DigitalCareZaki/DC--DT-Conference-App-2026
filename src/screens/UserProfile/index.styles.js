import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  detail_view: {
    marginTop: SIZES.padding2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding
  },
  left_view: {
    width: "60%"
  },
});

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2
  },
  detail_view: {
    marginTop: SIZES.padding2,
    marginBottom: SIZES.padding,
    backgroundColor: COLORS.light_purple,
    borderRadius: SIZES.padding,
    paddingHorizontal: SIZES.padding2,
    paddingVertical: SIZES.padding
  },
  left_view: {
    width: "60%"
  },
  btn: {
    backgroundColor: COLORS.transparent,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginTop: SIZES.padding2
  },
});

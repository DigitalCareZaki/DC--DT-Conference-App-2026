import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    justifyContent: 'center',
    backgroundColor: COLORS.modal_background_color,
  },
  sub_view: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding,
    padding: SIZES.padding,
  },
  icon_view: {
    position: 'absolute',
    right: SIZES.padding2,
    top: SIZES.padding2,
  },
  edit_btn: {
    width: '50%',
    backgroundColor: COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
});

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  border: {
    height: 2,
    backgroundColor: COLORS.border_color,
    flex: 1,
  },
  social_btn: {
    alignSelf: 'center',
    borderRadius: SIZES.padding * 2,
    height: SIZES.padding * 2.4,
    gap: SIZES.padding2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
  },
  forgot_text: {
    textDecorationLine: 'underline',
  },
});

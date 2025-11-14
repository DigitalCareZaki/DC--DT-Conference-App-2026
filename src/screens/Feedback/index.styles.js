import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2,
  },
  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding + 4,
    paddingHorizontal: SIZES.normal,
    borderRadius: SIZES.normal,
    alignItems: 'center',
  },
  input: {
    height: SIZES.padding * 6,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
  },
});

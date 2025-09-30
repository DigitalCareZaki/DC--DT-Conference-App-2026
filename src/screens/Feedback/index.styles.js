import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
  },
  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding + 4,
    paddingHorizontal: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
  input: {
    height: SIZES.padding * 6,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: SIZES.padding,
  },
});

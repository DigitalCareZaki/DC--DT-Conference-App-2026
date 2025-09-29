import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  txtInput: {
    height: 110,
  },
  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
});

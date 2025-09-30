import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
  },
  txtInput: {
    height: 110,
  },
  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: SIZES.padding,
  },
});

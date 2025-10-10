import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  input: {
    height: SIZES.padding * 6,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
  },
});

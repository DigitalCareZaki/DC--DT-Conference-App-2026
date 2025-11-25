import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  list: {
    justifyContent: 'space-between',
    gap: SIZES.padding2,
  },
});

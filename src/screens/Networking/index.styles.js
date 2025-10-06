import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2 / 2,
  },
  search_bar: {
    marginVertical: SIZES.padding2,
    alignSelf: 'center',
  },
  loader: {
    paddingVertical: SIZES.padding,
  },
});

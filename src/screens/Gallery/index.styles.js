import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  list: {
    justifyContent: "space-between"
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: SIZES.padding2 - 2,
  },
  iconContainer: {
    paddingTop: SIZES.padding,
  },
});

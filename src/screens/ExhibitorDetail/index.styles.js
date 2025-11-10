import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  map_view: {
    width: '100%',
    height: SIZES.padding * 7.93,
    borderRadius: SIZES.padding2,
    justifyContent: 'flex-end',
    marginTop: SIZES.padding2,
  },
});

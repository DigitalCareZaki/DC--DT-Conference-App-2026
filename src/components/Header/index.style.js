import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    height: SIZES.padding * 2,
    marginTop: SIZES.padding2 * 0.8,
  },
  icon_view: {
    height: SIZES.padding * 2.2,
    width: SIZES.padding * 2.2,
    marginHorizontal: SIZES.padding2 * 1.4
  },
});

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

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
  counter_card: {
    overflow: 'hidden',
    justifyContent: 'center',
  },
  text_view: {
    position: 'absolute',
    padding: SIZES.normal,
  },
});

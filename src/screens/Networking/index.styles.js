import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  search_bar: {
    marginVertical: SIZES.padding2,
    alignSelf: 'center',
  },
  grid: {
    backgroundColor: COLORS.primary,
    padding: SIZES.padding - 4,
    borderRadius: SIZES.padding - 4,
  },
  btn: {
    width: '40%',
  },
  gap: {
    gap: SIZES.padding2 + 4,
  },
  flatlist: {
    marginTop: SIZES.padding,
    marginBottom: SIZES.padding,
  },
});

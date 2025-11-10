import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
    paddingVertical: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  grid: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.padding + 4,
    paddingHorizontal: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
  width: {
    width: '100%',
  },
  btn: {
    width: SIZES.padding2 * 7.9,
    height: SIZES.padding + 4,
  },
  flex: {
    flex: 1,
  },
  flatList: {
    gap: SIZES.padding2 + 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  loader: {
    paddingVertical: SIZES.padding,
  },
  tabContainer: {
    backgroundColor: 'white',
    borderRadius: SIZES.padding * 2 + 10,
    padding: 5,
  },
  tab: {
    backgroundColor: COLORS.primary,
    width: '48%',
    padding: SIZES.padding2,
    borderRadius: SIZES.padding * 2 + 10,
    alignItems: 'center',
  },
});

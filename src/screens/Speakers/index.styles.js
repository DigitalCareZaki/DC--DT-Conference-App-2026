import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2,
  },
  banner: {
    alignSelf: 'center',
  },
  btn: {
    width: SIZES.padding * 7.25,
    height: SIZES.padding + 4,
    marginTop: SIZES.padding2 - 4,
  },
  flatList: { marginTop: SIZES.padding },
  grid: {
    backgroundColor: COLORS.primary,
    width: SIZES.padding * 8,
    paddingVertical: SIZES.padding2,
    borderRadius: SIZES.padding2 + 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding2 + 4,
  },
  flatlistContainer: {
    gap: SIZES.padding2 + 4,
  },
  tabContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  tab: {
    backgroundColor: COLORS.primary,
    width: '48%',
    padding: SIZES.padding2,
    borderRadius: 50,
    alignItems: 'center',
  },
});

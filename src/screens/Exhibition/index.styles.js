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
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding2 + 4,
    borderRadius: SIZES.padding2 + 4,
  },
  btn: { width: SIZES.padding * 5, height: SIZES.padding + 4 },
  map: {
    alignSelf: 'center',
  },
  mapText: {
    position: 'absolute',
    bottom: SIZES.padding2 - 4,
  },
  scrollViewStyle: {
    paddingBottom: SIZES.padding,
  },

  mapView: {
    marginHorizontal: SIZES.padding2 + 2,
  },
  flatlist: {
    gap: SIZES.padding2 + 4,
  },
  loader: {
    paddingVertical: SIZES.padding,
  },
});

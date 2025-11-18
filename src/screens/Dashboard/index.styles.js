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
  imageWrapper: {
    position: 'relative',
  },
  dotsOverlay: {
    position: 'absolute',
    bottom: SIZES.padding2 - 2,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SIZES.padding2 * 0.5,
  },
  dot: {
    width: SIZES.padding2,
    height: SIZES.padding2 - 6,
    borderRadius: SIZES.padding2 / 2,
    marginHorizontal: SIZES.radius_sm,
  },
  dotActive: {
    backgroundColor: COLORS.primary,
    width: SIZES.padding,
  },
  dotInactive: {
    backgroundColor: COLORS.background_grey_color,
  },
});

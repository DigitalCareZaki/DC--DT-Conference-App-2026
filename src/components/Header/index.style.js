import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    paddingHorizontal: SIZES.padding,
    height: SIZES.padding * 2,
    marginTop: SIZES.padding2 * 0.8,
  },
  back_icon_view: {
    // height: SIZES.padding * 2,
    // width: SIZES.padding * 1.5,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
  },
  image_view: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: SIZES.padding2 * 0.2,
    fontSize: SIZES.h18,
  },
  right_icon_view: {
    height: SIZES.padding * 2,
    width: SIZES.padding * 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  count_view: {
    position: 'absolute',
    top: -8,
    right: -8,
    height: SIZES.padding2 * 1.7,
    width: SIZES.padding2 * 1.7,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.padding,
    zIndex: 2,
  },
  user_image: {
    marginRight: SIZES.padding2,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

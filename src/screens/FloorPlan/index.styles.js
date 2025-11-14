import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  iconContainer: {
    paddingTop: SIZES.padding,
  },
  icon: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: SIZES.padding2 - 2,
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
  },
  zoom_btn: {
    position: 'absolute',
    bottom: 145,
    borderRadius: SIZES.padding * 5,
    flexDirection: 'row',
    width: '150',
    alignSelf: 'center',
    backgroundColor: COLORS.white,
  },
});

import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isIOS ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loader_view: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.padding,
    paddingVertical: SIZES.padding * 1.5,
    paddingHorizontal: SIZES.padding * 2,
    width: '100%',
  },
  disabled: {
    backgroundColor: COLORS.transparent,
  },
});

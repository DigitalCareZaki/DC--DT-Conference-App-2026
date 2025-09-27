import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  flatlist: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: SIZES.padding2 - 2,
  },
  modal: {
    backgroundColor: COLORS.primary,
    width: '90%',
    height: '50%',
    borderRadius: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

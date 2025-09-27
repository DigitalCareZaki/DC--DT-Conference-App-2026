import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants';

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

  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImageContainer: {
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingRight: SIZES.padding2 - 2,
    paddingTop: SIZES.padding,
  },
});

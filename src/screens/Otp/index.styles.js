import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    alignItems: 'center',
  },
  btn: {
    width: '90%',
    alignSelf: 'center',
  },
  codeFieldRoot: {
    justifyContent: 'center',
    gap: SIZES.padding2,
  },
  cell: {
    width: SIZES.padding * 3,
    height: SIZES.padding * 3,
    lineHeight: SIZES.padding * 3,
    borderRadius: SIZES.padding2,
    marginHorizontal: SIZES.padding2,
    borderWidth: 1,
    backgroundColor: 'white',
    color: COLORS.black,
  },
});

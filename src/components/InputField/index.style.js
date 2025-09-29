import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';

export const styles = StyleSheet.create({
  main_view: {
    alignItems: 'center',
    height: SIZES.padding * 2.4,
    borderRadius: SIZES.padding2,
    paddingHorizontal: SIZES.padding2,
    backgroundColor: COLORS.white,
    marginTop: SIZES.padding2 / 2,
  },
  input: {
    flex: 1,
    fontSize: SIZES.h12,
    color: COLORS.black,
    marginRight: SIZES.padding2,
    fontFamily: TextWeights.regular,
    height: '100%',
    textAlignVertical: 'top',
  },
});

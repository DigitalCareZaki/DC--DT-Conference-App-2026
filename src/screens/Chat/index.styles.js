import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.normal,
    paddingVertical: SIZES.padding,
  },
  rightBubbleStyle: {
    backgroundColor: COLORS.white,
    borderBottomRightRadius: 0,
    padding: SIZES.padding / 4,
    marginBottom: SIZES.padding / 4,
  },
  leftBubbleStyle: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 0,
    padding: SIZES.padding / 4,
    marginBottom: SIZES.padding / 4,
  },
  rightText: {
    color: COLORS.placeholder_text_color,
    marginTop: SIZES.padding / 2,
  },
  leftText: {
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: SIZES.padding / 2,
  },
  inputContainer: {
    width: '100%',
    height: SIZES.padding * 2.3,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.padding2,
    paddingRight: SIZES.padding2,
  },
  input_view: {
    flex: 1,
    height: '90%',
    justifyContent: 'center',
    marginTop: -SIZES.padding2 * 1.2,
    padding: 0,
    paddingTop: 0,
  },
  input: {
    marginBottom: 0,
    marginTop: 0,
  },
});

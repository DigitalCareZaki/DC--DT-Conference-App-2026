import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding2 + 4,
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
});

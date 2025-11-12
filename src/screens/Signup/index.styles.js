import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  icon_view: {
    alignSelf: 'flex-start',
    padding: 0,
    width: SIZES.padding * 2.1,
  },
  tab: {
    flex: 1,
    height: SIZES.padding2 / 3,
    backgroundColor: COLORS.white,
    marginTop: SIZES.padding2,
  },
  selected_tab: {
    backgroundColor: COLORS.light_blue_color,
  },
});

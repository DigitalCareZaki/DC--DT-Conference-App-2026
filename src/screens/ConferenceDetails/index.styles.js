import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2 / 2
  },
  download_btn: {
    backgroundColor: COLORS.transparent,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginVertical: SIZES.padding2
  },
  image_modal_container: {
    flex: 1,
    backgroundColor: COLORS.modal_background_color,
    paddingHorizontal: SIZES.padding2,
  },
  image_modal_icon_container: {
    paddingVertical: SIZES.padding,
  },
  image_modal_icon: {
    alignItems: 'flex-end',
    flex: 1,
  },
  image_modal_image: {
    flex: 1,
    width: '100%',
  },
});
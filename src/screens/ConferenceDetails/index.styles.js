import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding2 /2
  },
  download_btn: {
    backgroundColor: COLORS.transparent,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginVertical: SIZES.padding2
  },
});
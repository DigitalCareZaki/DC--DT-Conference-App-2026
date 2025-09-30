import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export const styles = StyleSheet.create({
  main_view: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.padding2,
    padding: SIZES.padding2,
    marginTop: SIZES.padding2
  },
  type_view: {
    backgroundColor: COLORS.white,
    height: SIZES.padding * 1.2,
    paddingHorizontal: SIZES.padding2,
    justifyContent:"center",
    borderRadius:SIZES.padding
  }
});
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";


export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: SIZES.padding2 * 1.5,
    marginHorizontal: SIZES.padding2,
  },
});
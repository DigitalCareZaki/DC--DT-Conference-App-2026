import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    main_view: {
        height: SIZES.padding * 2.4,
        borderRadius: SIZES.padding2,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.white,
        marginTop: SIZES.padding2 / 2,
    },
})
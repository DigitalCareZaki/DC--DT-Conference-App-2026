import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    main_view: {
        height: SIZES.padding * 2.6,
        justifyContent: "center",
        borderRadius: SIZES.padding2,
        paddingHorizontal: SIZES.padding2,
        // borderWidth: 1,
        // borderColor: COLORS.border_color,
        marginTop: SIZES.padding2 / 2,
        backgroundColor: COLORS.white
    },
    open_main_view: {
        borderRadius: 0,
        borderTopLeftRadius: SIZES.padding2,
        borderTopRightRadius: SIZES.padding2,
        // borderBottomWidth: 1,
        // borderBottomColor: COLORS.border_color,
        height: SIZES.padding * 2.6,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "center",
        // borderWidth: 1,
        // borderColor: COLORS.border_color,
        marginTop: SIZES.padding2 / 2,
        backgroundColor: COLORS.white
    },
    text_view: {
        height: SIZES.padding * 2.6,
        justifyContent: "center",
        paddingHorizontal: SIZES.padding2,
        borderWidth: 1,
        borderColor: COLORS.border_color,
        backgroundColor: COLORS.white
    },
    icon_view: {
        height: SIZES.padding * 2,
        width: SIZES.padding * 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: SIZES.padding2 * 0.5,
        backgroundColor: COLORS.inactive_dot_color
    }

})
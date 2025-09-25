import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TextWeights } from "../../config";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        justifyContent: "center",
        backgroundColor: COLORS.modal_background_color
    },
    sub_view: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.padding2,
        padding: SIZES.padding
    },
    icon_view: {
        alignSelf: "flex-end",
    },
})
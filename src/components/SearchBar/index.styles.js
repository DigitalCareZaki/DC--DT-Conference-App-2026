import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TextWeights } from "../../config";

export const styles = StyleSheet.create({
    main_view: {
        alignItems: "center",
        height: SIZES.padding * 2.5,
        borderRadius: SIZES.padding2,
        borderWidth: 1,
        borderColor: COLORS.border_color,
        paddingHorizontal: SIZES.padding2,
        backgroundColor: COLORS.white
    },
    input: {
        flex: 1,
        fontSize: SIZES.h13,
        color: COLORS.text_black,
        marginRight: SIZES.padding2,
        fontFamily: TextWeights.regular
    },

});

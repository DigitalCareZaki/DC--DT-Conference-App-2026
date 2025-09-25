import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { TextWeights } from "../../config";

export const styles = StyleSheet.create({
    input: {
        flex:1,
        backgroundColor: COLORS.input_background,
        color: COLORS.black,
        height: SIZES.padding * 5,
        textAlignVertical: "top",
        paddingTop: SIZES.padding2,
        fontSize: SIZES.h11,
        borderRadius: SIZES.padding2 / 2,
        borderWidth: 1,
        borderColor: COLORS.input_background,
        paddingHorizontal: SIZES.padding2,
        textAlign:"left",
        fontFamily:TextWeights.light
    },

});

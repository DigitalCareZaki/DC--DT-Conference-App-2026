import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";
import { COLORS, isIOS } from "../../constants/theme";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        paddingTop: isIOS ? SIZES.padding * 3 : SIZES.padding * 3,
        justifyContent: "space-between",
        backgroundColor: COLORS.white
    },
    lang_view: {
        borderColor: COLORS.grey_color,
        borderWidth: 1,
        borderRadius: SIZES.padding2 / 2,
        height: SIZES.padding * 1.5,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SIZES.padding2 / 2,
        minWidth:SIZES.padding * 4
    },
    text_view: {
        marginTop:SIZES.padding,
    }
})
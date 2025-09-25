import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

export const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        // paddingTop:SIZES.padding2
    },
    search_bar: {
        marginVertical: SIZES.padding2,
        width: "90%",
        alignSelf: 'center'
    },
    bottom_order_view: {
        position: "absolute",
        bottom: SIZES.padding2 / 2,
        backgroundColor: COLORS.primary,
        width: "90%",
        alignSelf: "center",
        height: SIZES.padding * 2.5,
        borderRadius: SIZES.padding2 / 2,
        zIndex: 20,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "space-between"
    }
})
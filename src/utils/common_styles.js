import { RowView } from "../components";
import { TextWeights } from "../config";
import { COLORS, SIZES } from "../constants";

export const common_styles = {
    flex_1: {
        flex: 1,
    },
    main_view: {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
    },
    hitslop: {
        bottom: 30,
        right: 30,
        top: 30,
        left: 30
    },
    hitslop2: {
        bottom: 15,
        right: 15,
        top: 15,
        left: 15
    },
    marginTop: {
        marginTop: SIZES.padding
    },
    marginTop2: {
        marginTop: SIZES.padding2
    },
    paddingTop: {
        paddingTop: SIZES.padding
    },
    paddingTop2: {
        paddingTop: SIZES.padding2
    },

    heading:{
        paddingHorizontal: SIZES.padding,
    }
   
}
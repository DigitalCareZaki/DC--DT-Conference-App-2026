import { StyleSheet, View } from 'react-native'
import { Text, Icons, RowView } from "../../index"
import { common_styles } from '../../../utils/common_styles'
import { SIZES } from '../../../constants'

const SingleDrawerView = ({ item, onPress }) => {
    return (
        <RowView style={styles.main_view} onPress={onPress}  >
            <View style={styles.icon_view} >
                <Icons iconHeight={SIZES.padding * 1.3} name={item?.icon} />
            </View>
            <Text size={SIZES.h14} style={common_styles.flex_1} text={item?.name} />
        </RowView>
    )
}

export default SingleDrawerView

const styles = StyleSheet.create({
    main_view: {
        marginTop: SIZES.padding
    },
    icon_view: {
        width: SIZES.padding * 1.5,
        height: SIZES.padding * 1.5,
        justifyContent: "center",
        alignItems: "flex-start",
    },
})
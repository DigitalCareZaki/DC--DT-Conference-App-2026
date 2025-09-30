import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons, Text } from "../../../components"
import { navigate } from '../../../navigation/service'
import { COLORS, SIZES } from '../../../constants'
import { TextWeights } from '../../../config'

const SingleTabView = ({ item }) => {
    return (
        <TouchableOpacity
            style={styles.main_view}
            activeOpacity={0.8}
            onPress={() => navigate(item?.route)} >
            <Icons name={item?.icon} />
            <Text
                size={SIZES.h14}
                weight={TextWeights.medium}
                text={item?.name}
                mt={SIZES.padding2}
            />
        </TouchableOpacity>
    )
}

export default SingleTabView

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        height: SIZES.padding * 5.5,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.padding2 * 1.2,
        marginTop: SIZES.padding2,
        paddingHorizontal: SIZES.padding2,
        justifyContent: "center",
        alignItems: "center"
    }
})
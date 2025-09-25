import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { RowView, Text } from '../../../components'
import { COLORS, SIZES } from '../../../constants'
import { TextWeights } from '../../../config'
import { common_styles } from '../../../utils/common_styles'

const SeeAllRow = ({ title, onPress }) => {
    return (
        <RowView justifyContent={'space-between'} style={styles.main_view} >
            <Text
                weight={TextWeights.semibold}
                size={SIZES.h18}
                text={title} />

            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.6}
                hitSlop={common_styles.hitslop2}
            >
                <Text
                    color={COLORS.primary}
                    text={"See All"}
                    size={SIZES.h12}
                />
            </TouchableOpacity>
        </RowView>
    )
}

export default SeeAllRow

const styles = StyleSheet.create({
    main_view: {
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.padding
    }
})
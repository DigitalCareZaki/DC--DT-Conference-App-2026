import { StyleSheet } from 'react-native'
import React from 'react'
import { Text } from '../index'
import { COLORS, SIZES } from '../../constants'

const ListEmptyText = ({ text, color, mt }) => {
    return (
        <Text
            text={text}
            mt={mt ?? SIZES.padding}
            color={color ?? COLORS.primary}
            align={'center'}

        />
    )
}

export default ListEmptyText

const styles = StyleSheet.create({})
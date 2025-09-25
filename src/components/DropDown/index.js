import React, { useRef, useState } from 'react'
import RowView from '../RowView'
import { Icons, Text } from '../index'
import { styles } from './index.styles'
import { Animated, Keyboard, ScrollView, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { TextWeights } from '../../config'
import { common_styles } from '../../utils/common_styles'
import { dropdown_icon } from '../../assets/icons'

const DropDown = ({
    style,
    textStyle,
    placeholder,
    value,
    array, value_key,
    onPressValue,
    icon,
    textColor,
    label,
    isrequired,
    leftIcon
}) => {

    const [open, setOpen] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const animationValue = useRef(new Animated.Value(0)).current

    const itemHeight = SIZES.padding * 2.6;

    const dropdownHeight = array && array.length > 0
        ? Math.min(array?.length * itemHeight, 300) : 20;

    const toggleDropdown = (isKeyboard = true) => {
        try {
            if (isKeyboard) Keyboard.dismiss()
            setIsAnimating(true)
            const toValue = animationValue._value === 1 ? 0 : 1
            Animated.timing(animationValue, {
                toValue,
                duration: 500,
                useNativeDriver: false,
            }).start(() => {
                setIsAnimating(false)
                if (toValue === 0) setOpen(false)
            })
            if (toValue === 1) setOpen(true)

        } catch (error) {
        }
    }

    const animatedStyles = {
        opacity: animationValue,
        height: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, dropdownHeight ?? 40], // Dynamic height based on items
        }),
    }

    return (

        <View style={{ marginTop: SIZES.padding2 }} >
            <Text
                text={label}
                weight={TextWeights.medium}
                size={SIZES.h12}
                isrequired={isrequired}
            />

            <View style={common_styles.flex_1} >
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={toggleDropdown}
                    style={[open ? styles.open_main_view : styles.main_view, style]}
                >
                    <RowView alignItems={"center"}>
                        {leftIcon && <Icons name={leftIcon} />}
                        <Text
                            style={[{ flex: 1 }, textStyle]}
                            color={textColor ? textColor : value ? COLORS.black : COLORS.placeholder_text_color}
                            text={value || placeholder}
                            size={SIZES.h12}
                        />
                        <Icons name={icon || dropdown_icon} />
                    </RowView>
                </TouchableOpacity>
                {
                    open && (animationValue._value !== 0 || isAnimating) &&
                    <Animated.View style={[animatedStyles, { overflow: 'hidden' }]}>
                        <ScrollView nestedScrollEnabled keyboardShouldPersistTaps={"handled"}>
                            {
                                array?.map((item, index) => (
                                    <TouchableOpacity
                                        key={index?.toString()}
                                        style={styles.text_view}
                                        activeOpacity={0.6}
                                        onPress={() => {
                                            toggleDropdown()
                                            onPressValue(item)
                                        }}
                                    >
                                        <Text
                                            size={SIZES.h12}
                                            text={item?.[value_key]}
                                        />
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>
                    </Animated.View>
                }
            </View>
        </View>
    )
}

export default DropDown

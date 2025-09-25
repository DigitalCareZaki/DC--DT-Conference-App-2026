import { View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { Button, Icons, SizedBox, Text } from '..'
import { close_icon, modal_logout_icon } from '../../assets/icons'
import { COLORS, SIZES } from '../../constants'
import { common_styles } from '../../utils/common_styles'
import { TextWeights } from '../../config'

const AskModal = ({
    visible,
    onPressClose,
    onPressYes,
}) => {
    return (
        <Modal animationType='fade' transparent visible={visible} >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onPressClose}
                style={styles.main_view}  >

                <TouchableOpacity activeOpacity={1} onPress={() => { }} style={styles.sub_view} >
                    <TouchableOpacity
                        onPress={onPressClose}
                        hitSlop={common_styles.hitslop} style={styles.icon_view} activeOpacity={0.6} >
                        <Icons name={close_icon} />
                    </TouchableOpacity>

                    <Icons name={modal_logout_icon} />

                    <Text
                        mt={SIZES.padding}
                        align={'center'}
                        color={COLORS.text_gray_color}
                        weight={TextWeights.medium}
                        text={"Logout"}
                        size={SIZES.h18}
                    />
                    <Text
                        align={'center'}
                        weight={TextWeights.medium}
                        text={"See you next time! You can log out here."}
                        size={SIZES.h12}
                        mt={SIZES.padding2 / 3}
                    />

                    <SizedBox height={SIZES.padding2} />


                    <View style={styles.border} />


                    <Button
                        buttonText={"Logout"}
                        onPress={onPressYes}
                    />

                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    )
}

export default AskModal
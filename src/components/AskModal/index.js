import { View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { Button, Icons, SizedBox, Text } from '..'
import { close_icon, modal_logout_icon } from '../../assets/icons'
import { SIZES } from '../../constants'
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
                        hitSlop={common_styles.hitslop}
                        style={styles.icon_view}
                        activeOpacity={0.6} >
                        <Icons name={close_icon} />
                    </TouchableOpacity>

                    <SizedBox />

                    <Icons name={modal_logout_icon} />

                    <Text
                        align={'center'}
                        weight={TextWeights.bold}
                        text={"Logout"}
                        size={SIZES.h22}
                        mt={SIZES.padding2}
                    />
                    <Text
                        align={'center'}
                        text={"See you next time! You can log out here."}
                        mt={SIZES.padding2 / 2}
                    />

                    <SizedBox />
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
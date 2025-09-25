import { View } from 'react-native'
import React from 'react'
import { styles } from './index.styles'
import { AskModal, Container, ImageView, SizedBox } from '../index'
import DrawerContentFunctional from "./index.function"
import { images, SIZES } from '../../constants'

const DrawerContent = ({ navigation }) => {
    const {
        onPressLogout,
        user,
        setShowModal,
        showModal,
    } = DrawerContentFunctional()

    return (
        <Container  >
            <View style={styles.main_view} >

                <ImageView image={images.drawer_logo} />

                <View>



                    <SizedBox height={SIZES.padding2} />

                    <AskModal
                        description={"See you next time! You can log out here."}
                        onPressClose={() => setShowModal(false)}
                        onPressYes={onPressLogout}
                        title={"Logout"}
                        visible={showModal}
                    />

                    <SizedBox />

                </View>
            </View>
        </Container >
    )
}

export default DrawerContent
import { View } from 'react-native'
import React from 'react'
import { Container, Header, Text } from '../../components'
import { styles } from './index.styles'

const Notifications = () => {
    return (
        <Container>
            <Header title={"Notifications"} />
            <View style={styles.main_view} >
                <Text text={"Notifications"} />
            </View>
        </Container>
    )
}

export default Notifications
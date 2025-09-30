import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, Container, ErrorText, Icons, InputField, Loader, RowView, SizedBox, Text } from '../../components'
import { COLORS, SIZES } from '../../constants'
import { roles, signup_steps, TextWeights } from '../../config'
import { common_styles } from '../../utils/common_styles'
import { goBack, navigate } from '../../navigation/service'
import { keyboardAvoidingBehaviour } from '../../constants/theme'
import SignupFunctional from "./index.function"
import { Formik } from 'formik'
import { signup_schema, signup_validation_schema } from '../../validations_schemas/signup_validation_schemas'
import { styles } from "./index.styles"
import { back_icon } from '../../assets/icons'
import {
    BasicInformation,
    SelectCategory,
    SetupPassword,
    SocialMediaLinks
} from "./components"

const Signup = () => {
    const {
        auth_loading,
        selectedIndex,
        onPressButton,
        onPressBack
    } = SignupFunctional()

    return (
        <Container>
            <KeyboardAvoidingView style={common_styles.flex_1} behavior={keyboardAvoidingBehaviour}  >

                <View style={styles.main_view} >
                    <ScrollView  nestedScrollEnabled={true} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}  >

                        <TouchableOpacity  onPress={onPressBack} style={styles.icon_view} hitSlop={common_styles.hitslop} activeOpacity={0.6} >
                            <Icons name={back_icon} />
                        </TouchableOpacity>

                        <Text
                            weight={TextWeights.bold}
                            size={SIZES.h14}
                            text={signup_steps?.[selectedIndex] ?? ""} />


                        <RowView>
                            {signup_steps?.map((val, ind) => (
                                <View key={ind?.toString()} style={[styles.tab, selectedIndex >= ind && styles.selected_tab]} />
                            ))}
                        </RowView>

                        <Text
                            text={`Step 0${selectedIndex + 1}/04`}
                            mt={SIZES.padding2}
                            weight={TextWeights.medium}
                        />
                        {selectedIndex === 0 && <BasicInformation />}
                        {selectedIndex === 1 && <SelectCategory />}
                        {selectedIndex === 2 && <SocialMediaLinks />}
                        {selectedIndex === 3 && <SetupPassword />}

                        <SizedBox />

                        {
                            auth_loading ?
                                <Loader mt={0} />
                                :
                                <Button onPress={onPressButton} buttonText={selectedIndex < 3 ? "Next" : "Submit"} />
                        }

                        <SizedBox />

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>



        </Container>
    )
}

export default Signup
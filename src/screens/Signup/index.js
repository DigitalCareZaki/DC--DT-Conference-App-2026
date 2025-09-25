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

const Signup = () => {
    const {
        isKeybaord,
        onPressSignup,
        auth_loading,
        selectedIndex,
        setSelectedIndex
    } = SignupFunctional()

    return (
        <Container>

            <KeyboardAvoidingView style={common_styles.flex_1} behavior={keyboardAvoidingBehaviour}  >

                <View style={styles.main_view} >
                    <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={"handled"}  >

                        {/* <Formik
                            validationSchema={signup_validation_schema}
                            initialValues={signup_schema}
                            validateOnChange={false}
                            validateOnMount={false}
                            validateOnBlur={false}
                            onSubmit={(values, functions) => onPressSignup(values, functions.resetForm)}
                        >
                            {({ handleSubmit, setFieldValue, setFieldError, values, errors, }) => {
                                return (
                                    <> */}

                        <TouchableOpacity style={styles.icon_view} hitSlop={common_styles.hitslop} activeOpacity={0.6} >
                            <Icons name={back_icon} />
                        </TouchableOpacity>

                        <Text
                            weight={TextWeights.bold}
                            size={SIZES.h14}
                            text={signup_steps?.[selectedIndex] ?? ""} />


                        <RowView>
                            {roles?.map((val, ind) => (
                                <View style={[styles.tab, selectedIndex > ind && styles.selected_tab]} />
                            ))}
                        </RowView>


                        {
                            !isKeybaord &&
                            <>
                                <RowView gap={0} justifyContent={'center'} >
                                    <Text
                                        size={SIZES.h12}
                                        text={"Already have an account?"} />

                                    <TouchableOpacity hitSlop={common_styles.hitslop2} onPress={goBack} activeOpacity={0.6} >
                                        <Text
                                            size={SIZES.h12}
                                            weight={TextWeights.medium}
                                            textDecorationLine={'underline'}
                                            text={"Login"}
                                        />
                                    </TouchableOpacity>
                                </RowView>
                                <SizedBox height={SIZES.padding * 1.5} />
                            </>
                        }



                        {/* </>
                                )
                            }}
                        </Formik> */}

                        <SizedBox />

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>



        </Container>
    )
}

export default Signup
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Button,
  Container,
  DropDown,
  ErrorText,
  Icons,
  InputField,
  Loader,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
import { roles, TextWeights } from '../../config';
import { common_styles } from '../../utils/common_styles';
import { navigate } from '../../navigation/service';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import LoginFunctional from './index.function';
import { Formik } from 'formik';
import {
  login_schema,
  login_validation_schema,
} from '../../validations_schemas/login_validation_schema';
import {
  email_icon,
  google_icon,
  or_line_icon,
  password_icon,
  role_icon,
} from '../../assets/icons';

const Login = () => {
  const {
    onPressLogin,
    auth_loading,
    onPressGoogleBtn,
    google_signin_loading,
  } = LoginFunctional();

  return (
    <Container>
      <KeyboardAvoidingView
        style={common_styles.flex_1}
        behavior={keyboardAvoidingBehaviour}
      >
        <View style={styles.main_view}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
          >
            <Formik
              validationSchema={login_validation_schema}
              initialValues={login_schema}
              validateOnChange={false}
              validateOnMount={false}
              validateOnBlur={false}
              onSubmit={values => onPressLogin(values)}
            >
              {({ handleSubmit, setFieldValue, values, errors }) => {
                return (
                  <>
                    <Text
                      weight={TextWeights.heavy}
                      size={SIZES.h26}
                      text={'Welcome to Pharma Asia!'}
                      align={'center'}
                      mt={SIZES.padding * 2}
                    />
                    <Text
                      size={SIZES.h14}
                      text={
                        "Your journey into Pakistan's largest healthcare event starts here. Please log in or signup to access all the features and connect with fellow attendees."
                      }
                      align={'center'}
                      lineHeight={SIZES.padding}
                    />

                    <SizedBox height={SIZES.padding2} />

                    <DropDown
                      isrequired
                      label={'Are you a:'}
                      placeholder={'Select your role'}
                      leftIcon={role_icon}
                      value={'Visitor'}
                      value_key={'name'}
                      isEditable={false}
                      array={roles}
                      onPressValue={val => setFieldValue('role', val?.name)}
                    />
                    <ErrorText error={errors?.role} />

                    <InputField
                      isrequired
                      label={'Email Address'}
                      placeholder={'Enter your Email Address'}
                      leftIcon={email_icon}
                      value={values?.email}
                      onChangeText={text => setFieldValue('email', text)}
                      maxLength={40}
                      keyboardType={'email-address'}
                    />
                    <ErrorText error={errors?.email} />

                    <InputField
                      isrequired
                      label={'Password'}
                      placeholder={'Enter your password'}
                      isPassword
                      leftIcon={password_icon}
                      value={values?.password}
                      onChangeText={text => setFieldValue('password', text)}
                      maxLength={25}
                    />
                    <ErrorText error={errors?.password} />

                    <TouchableOpacity
                      onPress={() => navigate('ForgotPassword')}
                    >
                      <Text
                        text={'Forgot Password'}
                        align={'right'}
                        style={styles.forgot_text}
                        mt={SIZES.padding2}
                        weight={TextWeights.bold}
                      />
                    </TouchableOpacity>
                    <SizedBox height={SIZES.padding * 2} />

                    {auth_loading ? (
                      <Loader />
                    ) : (
                      <Button
                        buttonText={'Login'}
                        onPress={handleSubmit}
                        isDisabled={google_signin_loading}
                      />
                    )}

                    <SizedBox />

                    <RowView>
                      <Icons name={or_line_icon} />
                      <Text size={SIZES.h14} text={'OR'} />
                      <Icons name={or_line_icon} />
                    </RowView>

                    <SizedBox />

                    {google_signin_loading ? (
                      <Loader />
                    ) : (
                      <RowView
                        disabled={auth_loading}
                        onPress={() => onPressGoogleBtn(values)}
                        style={[
                          styles.social_btn,
                          {
                            backgroundColor: auth_loading
                              ? COLORS.background_grey_color
                              : COLORS.white,
                          },
                        ]}
                      >
                        <Icons name={google_icon} />
                        <Text
                          weight={TextWeights.medium}
                          color={COLORS.text_black}
                          text={'Continue With Google'}
                        />
                      </RowView>
                    )}

                    <SizedBox height={SIZES.padding * 2} />

                    <RowView gap={0} justifyContent={'center'}>
                      <Text text={'Don’t have an account?'} />

                      <TouchableOpacity
                        hitSlop={common_styles.hitslop2}
                        onPress={() => navigate('Signup')}
                        activeOpacity={0.6}
                      >
                        <Text
                          weight={TextWeights.bold}
                          textDecorationLine={'underline'}
                          text={'Sign Up'}
                        />
                      </TouchableOpacity>
                    </RowView>
                  </>
                );
              }}
            </Formik>

            <SizedBox />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;

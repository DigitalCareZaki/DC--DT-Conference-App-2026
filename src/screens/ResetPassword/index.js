import React from 'react';
import Container from '../../components/Container';
import { styles } from './index.styles';
import {
  Button,
  ErrorText,
  Header,
  InputField,
  Loader,
  SizedBox,
  Text,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { password_icon } from '../../assets/icons';
import { Formik } from 'formik';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import { common_styles } from '../../utils/common_styles';
import {
  reset_password_schema,
  reset_password_validation_schema,
} from '../../validations_schemas/reset_password_validation_schema';
import ResetPasswordFunctional from './index.function';

const ResetPassword = () => {
  const { onPressSubmit, auth_loading } = ResetPasswordFunctional();
  return (
    <Container>
      <Header rightIcon={null} />
      <Formik
        initialValues={reset_password_schema}
        validationSchema={reset_password_validation_schema}
        validateOnChange={true}
        validateOnMount={false}
        validateOnBlur={false}
        onSubmit={values => onPressSubmit(values)}
      >
        {({ handleChange, values, errors, handleSubmit, setFieldValue }) => {
          return (
            <>
              <KeyboardAvoidingView
                style={common_styles.flex_1}
                behavior={keyboardAvoidingBehaviour}
              >
                <View style={styles.main_view}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <SizedBox height={SIZES.padding + SIZES.padding2} />

                    <Text
                      text={'Reset Password'}
                      size={SIZES.h28}
                      weight={TextWeights.heavy}
                      align={'center'}
                    />

                    <Text
                      text={
                        'Enter and confirm your new password to complete the reset process.'
                      }
                      size={SIZES.h14}
                      align={'center'}
                      lineHeight={SIZES.padding + 2}
                      mt={SIZES.padding2}
                    />

                    <SizedBox height={SIZES.padding + SIZES.padding} />

                    <InputField
                      isrequired={true}
                      label={'New Password'}
                      placeholder={'Enter your New Password'}
                      leftIcon={password_icon}
                      isPassword
                      value={values.password}
                      onChangeText={handleChange('password')}
                    />
                    <ErrorText error={errors.password} />

                    <InputField
                      isrequired={true}
                      label={'Confirm Password'}
                      placeholder={'Confirm your New Password'}
                      leftIcon={password_icon}
                      isPassword
                      value={values.confirm_password}
                      onChangeText={handleChange('confirm_password')}
                    />
                    <ErrorText error={errors.confirm_password} />

                    <SizedBox />
                  </ScrollView>
                </View>
              </KeyboardAvoidingView>
              {auth_loading ? (
                <Loader />
              ) : (
                <Button
                  buttonText={'Continue'}
                  style={styles.btn}
                  onPress={handleSubmit}
                />
              )}
              <SizedBox />
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ResetPassword;

import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { common_styles } from '../../../utils/common_styles';
import { ErrorText, InputField, RowView, Text } from '../../../components';
import { password_icon } from '../../../assets/icons';
import { COLORS, SIZES } from '../../../constants';
import { privacy_policy_link, terms_link } from '../../../config';
import { Formik } from 'formik';
import {
  password_schema,
  password_validation_schema,
} from '../../../validations_schemas/password_validation_schemas';

const SetupPassword = ({ formikRef, onSubmit, data }) => {
  return (
    <Formik
      innerRef={formikRef}
      initialValues={password_schema(data)}
      validationSchema={password_validation_schema}
      onSubmit={values => onSubmit(values)}
    >
      {({ values, errors, setFieldValue, handleChange }) => {
        return (
          <View style={common_styles.flex_1}>
            <InputField
              isPassword
              isrequired
              label={'Create Password'}
              leftIcon={password_icon}
              placeholder={'Enter your Password'}
              value={values.password}
              onChangeText={handleChange('password')}
              maxLength={10}
            />
            <ErrorText error={errors.password} />

            <InputField
              isPassword
              isrequired
              label={'Confirm Password'}
              leftIcon={password_icon}
              placeholder={'Confirm your Password'}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              maxLength={10}
            />
            <ErrorText error={errors.confirmPassword} />

            <RowView
              onPress={() =>
                setFieldValue('isAgreeToTheTerms', !values.isAgreeToTheTerms)
              }
              gap={0}
              style={styles.row}
            >
              <View
                style={[
                  styles.uncheck_view,
                  values.isAgreeToTheTerms && styles.checked_view,
                ]}
              />

              <Text text={'I agree to the '} />

              <TouchableOpacity
                onPress={() => Linking.openURL(terms_link)}
                activeOpacity={0.6}
              >
                <Text
                  text={'Terms & Conditions'}
                  textDecorationLine={'underline'}
                />
              </TouchableOpacity>

              <Text text={' and '} />

              <TouchableOpacity
                onPress={() => Linking.openURL(privacy_policy_link)}
                activeOpacity={0.6}
              >
                <Text
                  textDecorationLine={'underline'}
                  text={'Privacy Policy'}
                />
              </TouchableOpacity>
            </RowView>
            <ErrorText error={errors.isAgreeToTheTerms} />
          </View>
        );
      }}
    </Formik>
  );
};

export default SetupPassword;

const styles = StyleSheet.create({
  row: {
    flexWrap: 'wrap',
    marginTop: SIZES.padding2,
  },
  uncheck_view: {
    height: SIZES.padding2,
    width: SIZES.padding2,
    borderRadius: SIZES.padding2 / 6,
    backgroundColor: COLORS.white,
    marginRight: SIZES.padding2 / 2,
  },
  checked_view: {
    backgroundColor: COLORS.primary,
  },
});

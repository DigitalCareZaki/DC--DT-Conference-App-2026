import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../../constants';
import { DateView, ErrorText, InputField } from '../../../components';
import { email_icon, location_icon, role_icon } from '../../../assets/icons';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import {
  signup_schema,
  signup_validation_schema,
} from '../../../validations_schemas/signup_validation_schemas';

const BasicInformation = ({ onSubmit, formikRef, data }) => {
  console.log('data', data);
  return (
    <Formik
      innerRef={formikRef}
      initialValues={signup_schema(data)}
      validationSchema={signup_validation_schema}
      validateOnChange={true}
      validateOnMount={false}
      validateOnBlur={false}
      onSubmit={val => onSubmit(val)}
    >
      {({ values, errors, setFieldValue, handleChange }) => {
        return (
          <View style={styles.main_view}>
            <InputField
              label={'Full Name'}
              isrequired
              leftIcon={role_icon}
              placeholder={'Enter Name'}
              value={values.name}
              onChangeText={handleChange('name')}
            />
            <ErrorText error={errors.name} />

            <DateView
              label={'Date Of Birth'}
              placeholder={'Enter your date of birth'}
              maximumDate={new Date(dayjs().subtract(18, 'years'))}
              minimumDate={null}
              dateText={values.dateOfBirth}
              value={values.dateOfBirth}
              onChangeValue={val => {
                setFieldValue('dateOfBirth', val);
              }}
            />

            <ErrorText error={errors.dateOfBirth} />

            <InputField
              label={'Email Address'}
              isrequired
              leftIcon={email_icon}
              placeholder={'Enter your Email Address'}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <ErrorText error={errors.email} />

            <InputField
              label={'City'}
              isrequired
              leftIcon={location_icon}
              placeholder={'Enter your City'}
              value={values.city}
              onChangeText={handleChange('city')}
            />
            <ErrorText error={errors.city} />
          </View>
        );
      }}
    </Formik>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding2 / 2,
  },
});

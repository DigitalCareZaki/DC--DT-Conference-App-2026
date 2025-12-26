import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../../constants';
import { ErrorText, InputField } from '../../../components';
import {
  company_icon,
  designation_icon,
  role_icon,
} from '../../../assets/icons';
import { Formik } from 'formik';
import {
  company_info_schema,
  company_info_validation_schema,
} from '../../../validations_schemas/company_information_validation_schema';

const CompanyInformation = ({ onSubmit, formikRef, data }) => {
  return (
    <Formik
      initialValues={company_info_schema(data)}
      validationSchema={company_info_validation_schema}
      validateOnChange={false}
      validateOnMount={false}
      validateOnBlur={false}
      innerRef={formikRef}
      onSubmit={val => onSubmit(val)}
    >
      {({ values, errors, handleChange }) => {
        return (
          <View style={styles.main_view}>
            <InputField
              label={'Company Name'}
              isrequired
              placeholder={'Enter Company Name'}
              leftIcon={company_icon}
              value={values.companyName}
              onChangeText={handleChange('companyName')}
            />
            <ErrorText error={errors.companyName} />

            <InputField
              label={'Designation'}
              isrequired
              placeholder={'Enter Designation'}
              leftIcon={designation_icon}
              value={values.designation}
              onChangeText={handleChange('designation')}
            />
            <ErrorText error={errors.designation} />

            <InputField
              label={'Display Name'}
              isrequired
              placeholder={'Enter Display Name'}
              leftIcon={role_icon}
              value={values.displayName}
              onChangeText={handleChange('displayName')}
            />
            <ErrorText error={errors.displayName} />
          </View>
        );
      }}
    </Formik>
  );
};

export default CompanyInformation;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding2 / 2,
  },
});

import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../constants';
import {
  Button,
  Container,
  ErrorText,
  Header,
  InputField,
  Loader,
  SizedBox,
  Text,
} from '../../components';
import { company_icon, designation_icon, role_icon } from '../../assets/icons';
import { Formik } from 'formik';
import { styles } from './index.styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import { common_styles } from '../../utils/common_styles';
import { TextWeights } from '../../config';
import { company_info_validation_schema } from '../../validations_schemas/company_information_validation_schema';
import CompanyInformationFunctional from './index.function';

const CompanyInformation = () => {
  const { onSubmit, main_post_loading } = CompanyInformationFunctional();
  return (
    <Container>
      <Header rightIcon={null} />
      <KeyboardAvoidingView
        style={common_styles.flex_1}
        behavior={keyboardAvoidingBehaviour}
      >
        <Formik
          initialValues={{
            companyName: '',
            designation: '',
            displayName: '',
          }}
          validationSchema={company_info_validation_schema}
          validateOnChange={false}
          validateOnMount={false}
          validateOnBlur={false}
          onSubmit={val => onSubmit(val)}
        >
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
              <View style={styles.main_view}>
                <ScrollView
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps={'handled'}
                >
                  <SizedBox height={SIZES.padding2 * 2} />
                  <Text
                    text={'Company Information'}
                    size={SIZES.h16}
                    weight={TextWeights.bold}
                  />
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
                </ScrollView>

                {main_post_loading ? (
                  <Loader />
                ) : (
                  <Button buttonText={'Submit'} onPress={handleSubmit} />
                )}
              </View>
            );
          }}
        </Formik>

        <SizedBox />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default CompanyInformation;

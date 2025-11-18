import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../constants';
import {
  Button,
  Container,
  ErrorText,
  Header,
  InputField,
  SizedBox,
  Text,
} from '../../components';
import { company_icon, designation_icon, role_icon } from '../../assets/icons';
import { Formik } from 'formik';
import { styles } from './index.styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import { common_styles } from '../../utils/common_styles';
import { TextWeights } from '../../config';
import {
  basic_info_schema,
  basic_info_validation_schema,
} from '../../validations_schemas/basic_information_validation_schema';

const BasicInformation = () => {
  return (
    <Container>
      <Header rightIcon={null} />
      <KeyboardAvoidingView
        style={common_styles.flex_1}
        behavior={keyboardAvoidingBehaviour}
      >
        <Formik
          initialValues={basic_info_schema}
          validationSchema={basic_info_validation_schema}
          validateOnChange={false}
          validateOnMount={false}
          validateOnBlur={false}
          onSubmit={val => onSubmit(val)}
        >
          {({ values, errors, setFieldValue, handleChange, handleSubmit }) => {
            return (
              <View style={styles.main_view}>
                <ScrollView
                  nestedScrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps={'handled'}
                >
                  <SizedBox height={SIZES.padding2 * 2} />
                  <Text
                    text={'Basic Information'}
                    size={SIZES.h16}
                    weight={TextWeights.bold}
                  />
                  <InputField
                    label={'Company Name'}
                    isrequired
                    placeholder={'Enter Company Name'}
                    leftIcon={company_icon}
                    value={values.company_name}
                    onChangeText={handleChange('company_name')}
                  />
                  <ErrorText error={errors.company_name} />

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
                    value={values.display_name}
                    onChangeText={handleChange('display_name')}
                  />
                  <ErrorText error={errors.display_name} />
                </ScrollView>

                <Button buttonText={'Submit'} onPress={handleSubmit} />
              </View>
            );
          }}
        </Formik>

        <SizedBox />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default BasicInformation;

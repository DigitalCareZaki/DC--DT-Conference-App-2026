import React from 'react';
import {
  Button,
  Container,
  ErrorText,
  Header,
  InputField,
  SizedBox,
  Text,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import ContactFunctional from './index.function';
import ContactCard from './components/ContactCard';
import { Formik } from 'formik';
import {
  contact_schema,
  contact_validation_schema,
} from '../../validations_schemas/contact_validation_schema';

const Contact = () => {
  const { user, onSubmit } = ContactFunctional();

  return (
    <Container isTab={true}>
      <Header color={COLORS.white} title={'Contact'} />
      <KeyboardAvoidingView
        style={common_styles.flex_1}
        behavior={keyboardAvoidingBehaviour}
      >
        <Formik
          initialValues={contact_schema(user)}
          validateOnChange={false}
          validateOnMount={false}
          validateOnBlur={false}
          validationSchema={contact_validation_schema}
          onSubmit={values => onSubmit(values)}
        >
          {({ handleSubmit, values, errors, handleChange }) => {
            return (
              <>
                <View style={styles.main_view}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    <ContactCard />

                    <Text
                      mt={SIZES.padding}
                      text={'Send Us A Message'}
                      size={SIZES.h16}
                      weight={TextWeights.medium}
                      lineHeight={SIZES.padding2 * 1.5}
                    />

                    <InputField
                      isrequired
                      label={'Name'}
                      placeholder={'Enter Name'}
                      value={values?.name}
                      onChangeText={handleChange('name')}
                    />
                    <ErrorText error={errors.name} />

                    <InputField
                      isrequired
                      label={'Subject'}
                      placeholder={'What is this regarding'}
                      value={values?.subject}
                      onChangeText={handleChange('subject')}
                    />
                    <ErrorText error={errors.subject} />

                    <InputField
                      isrequired
                      label={'Message'}
                      placeholder={'Tell us more about your inquiry...'}
                      style={styles.multi_input}
                      inputStyle={{
                        textAlignVertical: 'top',
                      }}
                      value={values?.message}
                      onChangeText={handleChange('message')}
                    />
                    <ErrorText error={errors.message} />

                    <SizedBox />

                    <Button
                      buttonText={'Send Message'}
                      onPress={handleSubmit}
                    />

                    <SizedBox />
                  </ScrollView>
                </View>
              </>
            );
          }}
        </Formik>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Contact;

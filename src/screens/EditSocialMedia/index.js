import React from 'react';
import {
  Button,
  Container,
  ErrorText,
  Header,
  InputField,
  Loader,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { styles } from './index.styles';
import {
  facebook_icon,
  instagram_icon,
  linked_in_icon,
  twitter_icon,
  youtube_icon,
} from '../../assets/icons';
import { Formik } from 'formik';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import {
  socialMedia_schema,
  socialMedia_validation_schema,
} from '../../validations_schemas/socialMedia_validation_schema';
import EditSocialMediaFunctional from './index.function';

const EditSocialMedia = () => {
  const { main_loading, onPressSubmit, user } = EditSocialMediaFunctional();
  return (
    <Container>
      <Header rightIcon={null} title={'Edit Social Media Links'} />
      <Formik
        initialValues={socialMedia_schema(user)}
        validationSchema={socialMedia_validation_schema}
        validateOnChange={false}
        validateOnMount={false}
        validateOnBlur={false}
        onSubmit={values => onPressSubmit(values)}
      >
        {({ handleChange, values, errors, handleSubmit }) => {
          return (
            <>
              <KeyboardAvoidingView
                style={common_styles.flex_1}
                behavior={keyboardAvoidingBehaviour}
              >
                <View style={styles.main_view}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollViewStyle}
                  >
                    <InputField
                      label={'Facebook Link'}
                      leftIcon={facebook_icon}
                      placeholder={'Enter your Social Profile'}
                      value={values?.facebookLink}
                      onChangeText={handleChange('facebookLink')}
                    />
                    <ErrorText error={errors.facebookLink} />

                    <InputField
                      label={'Instagram Link'}
                      leftIcon={instagram_icon}
                      placeholder={'Enter your Social Profile'}
                      value={values?.instagramLink}
                      onChangeText={handleChange('instagramLink')}
                    />
                    <ErrorText error={errors.instagramLink} />

                    <InputField
                      label={'LinkedIn Link'}
                      leftIcon={linked_in_icon}
                      placeholder={'Enter your Social Profile'}
                      value={values?.linkedinLink}
                      onChangeText={handleChange('linkedinLink')}
                    />
                    <ErrorText error={errors.linkedinLink} />

                    <InputField
                      label={'YouTube Link'}
                      leftIcon={youtube_icon}
                      placeholder={'Enter your Social Profile'}
                      value={values?.youtubeLink}
                      onChangeText={handleChange('youtubeLink')}
                    />
                    <ErrorText error={errors.youtubeLink} />

                    <InputField
                      label={'Twitter Link'}
                      leftIcon={twitter_icon}
                      placeholder={'Enter your Social Profile'}
                      value={values?.twitterLink}
                      onChangeText={handleChange('twitterLink')}
                    />
                    <ErrorText error={errors.twitterLink} />
                  </ScrollView>
                  {main_loading ? (
                    <Loader />
                  ) : (
                    <Button
                      buttonText={'Save Changes'}
                      style={styles.btn}
                      onPress={handleSubmit}
                    />
                  )}
                </View>
              </KeyboardAvoidingView>
            </>
          );
        }}
      </Formik>
    </Container>
  );
};

export default EditSocialMedia;

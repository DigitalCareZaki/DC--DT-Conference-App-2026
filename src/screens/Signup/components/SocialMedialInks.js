import { StyleSheet, View } from 'react-native';
import React from 'react';
import { common_styles } from '../../../utils/common_styles';
import { ErrorText, InputField, Text } from '../../../components';
import { SIZES } from '../../../constants';
import {
  facebook_icon,
  instagram_icon,
  linked_in_icon,
  twitter_icon,
  youtube_icon,
} from '../../../assets/icons';
import { Formik } from 'formik';
import {
  socialMedia_schema,
  socialMedia_validation_schema,
} from '../../../validations_schemas/socialMedia_validation_schema';

const SocialMediaLinks = ({ onSubmit, formikRef, data }) => {
  return (
    <Formik
      initialValues={socialMedia_schema(data)}
      validationSchema={socialMedia_validation_schema}
      innerRef={formikRef}
      onSubmit={values => onSubmit(values)}
    >
      {({ values, errors, setFieldValue, handleChange }) => {
        return (
          <View style={common_styles.flex_1}>
            <Text
              mt={SIZES.padding2}
              text={
                '(Optional – Share your social profiles to help others connect with you during the event.)'
              }
            />

            <InputField
              label={'Facebook Link'}
              leftIcon={facebook_icon}
              placeholder={'Enter your Facebook Profile'}
              value={values.facebookLink}
              onChangeText={handleChange('facebookLink')}
            />
            <ErrorText error={errors.facebookLink} />

            <InputField
              label={'Instagram Link'}
              leftIcon={instagram_icon}
              placeholder={'Enter your Instagram Profile'}
              value={values.instagramLink}
              onChangeText={handleChange('instagramLink')}
            />
            <ErrorText error={errors.instagramLink} />

            <InputField
              label={'Linked In Link'}
              leftIcon={linked_in_icon}
              placeholder={'Enter your Linked In Profile'}
              value={values.linkedinLink}
              onChangeText={handleChange('linkedinLink')}
            />
            <ErrorText error={errors.linkedinLink} />

            <InputField
              label={'Youtube Link'}
              leftIcon={youtube_icon}
              placeholder={'Enter your Youtube Profile'}
              value={values.youtubeLink}
              onChangeText={handleChange('youtubeLink')}
            />
            <ErrorText error={errors.youtubeLink} />

            <InputField
              label={'Twitter Link'}
              leftIcon={twitter_icon}
              placeholder={'Enter your Twitter Profile'}
              value={values.twitterLink}
              onChangeText={handleChange('twitterLink')}
            />
            <ErrorText error={errors.twitterLink} />
          </View>
        );
      }}
    </Formik>
  );
};

export default SocialMediaLinks;

const styles = StyleSheet.create({});

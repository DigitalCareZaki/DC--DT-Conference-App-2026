import React from 'react';
import {
  Button,
  Card,
  Container,
  DropDown,
  Header,
  InputField,
  SizedBox,
  Text,
} from '../../components';
import { ScrollView } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';

const Contact = () => {
  return (
    <Container>
      <Header color={COLORS.white} title={'Contact'} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <Card isOrganizer isContact />

        <Text
          mt={SIZES.padding + 4}
          text={'Send Us A Message'}
          size={SIZES.h18}
          weight={TextWeights.medium}
        />

        <InputField
          isrequired={true}
          label={'Name'}
          placeholder={'Enter Name'}
        />
        <InputField
          isrequired={true}
          label={'Email'}
          placeholder={'Enter your email'}
        />

        <DropDown
          isrequired={true}
          label={'Subject'}
          placeholder={'What is this regarding?'}
          value_key={'name'}
          array={[
            {
              name: 'abc',
            },
          ]}
        />

        <InputField
          isrequired={true}
          label={'Message'}
          placeholder={'Tell us more about your inquiry...'}
          style={styles.txtInput}
        />

        <SizedBox />
        <Button buttonText={'Send Message'} />
      </ScrollView>
    </Container>
  );
};

export default Contact;

import React from 'react';
import {
  Button,
  Container,
  DropDown,
  Header,
  InputField,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';

const Contact = () => {

  return (
    <Container>
      <Header color={COLORS.white} title={'Contact'} />
      <KeyboardAvoidingView style={common_styles.flex_1} behavior={keyboardAvoidingBehaviour} >
        <View style={styles.main_view} >

          <ScrollView showsVerticalScrollIndicator={false}  >


            <View style={styles.detail_view} >

              <Text size={SIZES.h11} text={"Address"} weight={TextWeights.light} />
              <Text weight={TextWeights.medium} mt={SIZES.padding2 / 2} text={"123 Conference Center Drive Tech City, TC 12345"} />

              <SizedBox height={SIZES.padding2} />

              <RowView>
                <View style={styles.left_view} >
                  <Text size={SIZES.h11} text={"Email"} weight={TextWeights.light} />
                  <Text weight={TextWeights.medium} mt={SIZES.padding2 / 2} text={"info@globaltechconf.com"} />
                </View>

                <View style={common_styles.flex_1} >
                  <Text size={SIZES.h11} text={"Mobile"} weight={TextWeights.light} />
                  <Text weight={TextWeights.medium} mt={SIZES.padding2 / 2} text={"+1 (555) 123-4567"} />
                </View>
              </RowView>

              <Text mt={SIZES.padding2} size={SIZES.h11} text={"Office Hours"} weight={TextWeights.light} />
              <Text weight={TextWeights.medium} mt={SIZES.padding2 / 2} text={"Monday - Friday: 9:00 AM - 6:00 PM"} />
              <Text weight={TextWeights.medium} mt={SIZES.padding2 / 5} text={"Saturday: 10:00 AM - 4:00 PM"} />

            </View>

            <Text
              mt={SIZES.padding}
              text={'Send Us A Message'}
              size={SIZES.h16}
              weight={TextWeights.medium}
            />

            <InputField
              isrequired
              label={'Name'}
              placeholder={'Enter Name'}
              ml={SIZES.padding2}
            />

            <InputField
              ml={SIZES.padding2}
              isrequired
              label={'Email'}
              placeholder={'Enter your email'}
            />

            <DropDown
              ml={SIZES.padding2}
              isrequired
              label={'Subject'}
              placeholder={'What is this regarding?'}
              value_key={'name'}
              array={[{ name: 'abc' }]}
            />

            <InputField
              ml={SIZES.padding2}
              isrequired
              label={'Message'}
              placeholder={'Tell us more about your inquiry...'}
              style={styles.multi_input}
              inputStyle={{ textAlignVertical: 'top' }}
            />

            <SizedBox />

            <Button buttonText={'Send Message'} />

            <SizedBox />

          </ScrollView>

        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Contact;

import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { SIZES } from '../../../constants';
import { Button, DateView, InputField } from '../../../components';
import { email_icon, location_icon, role_icon } from '../../../assets/icons';
import dayjs from 'dayjs';
import { common_styles } from '../../../utils/common_styles';

const BasicInformation = () => {
  return (
    <View style={styles.main_view}>
      <InputField
        label={'Full Name'}
        isrequired
        leftIcon={role_icon}
        placeholder={'Enter Name'}
      />
      <DateView
        label={'Date Of Birth'}
        placeholder={'Enter your date of birth'}
        maximumDate={new Date(dayjs().subtract(18, 'years'))}
        minimumDate={null}
        onChangeValue={val => {}}
      />
      <InputField
        label={'Email Address'}
        isrequired
        leftIcon={email_icon}
        placeholder={'Enter your Email Address'}
      />
      <InputField
        label={'City'}
        isrequired
        leftIcon={location_icon}
        placeholder={'Enter your City'}
      />
    </View>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    paddingTop: SIZES.padding2 / 2,
  },
});

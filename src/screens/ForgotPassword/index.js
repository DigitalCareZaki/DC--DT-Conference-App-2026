import React from 'react';
import Container from '../../components/Container';
import { styles } from './index.styles';
import { Button, Header, InputField, SizedBox, Text } from '../../components';
import { View } from 'react-native';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { sms } from '../../assets/icons';
import { navigate } from '../../navigation/service';

const ForgotPassword = () => {
  return (
    <Container>
      <View style={styles.main_view}>
        <Header rightIcon={null} />
        <SizedBox height={SIZES.padding + SIZES.padding2} />
        <Text
          text={'Forgot Password'}
          size={SIZES.h28}
          weight={TextWeights.heavy}
          align={'center'}
        />

        <Text
          text={
            'Enter your registered email and we’ll send you a code to reset your password securely.'
          }
          size={SIZES.h14}
          align={'center'}
          lineHeight={SIZES.padding + 2}
          mt={SIZES.padding2}
        />

        <SizedBox height={SIZES.padding + SIZES.padding} />
        <InputField
          isrequired={true}
          label={'Email Address'}
          placeholder={'Enter your Email Address'}
          leftIcon={sms}
        />
      </View>
      <Button
        buttonText={'Continue'}
        style={styles.btn}
        onPress={() => navigate('Otp')}
      />
      <SizedBox />
    </Container>
  );
};

export default ForgotPassword;

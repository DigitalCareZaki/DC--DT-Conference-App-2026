import React from 'react';
import Container from '../../components/Container';
import { styles } from './index.styles';
import {
  Button,
  ErrorText,
  Header,
  InputField,
  Loader,
  SizedBox,
  Text,
} from '../../components';
import { View } from 'react-native';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { sms } from '../../assets/icons';
import { navigate } from '../../navigation/service';
import ForgotPasswordFunctional from './index.function';

const ForgotPassword = () => {
  const { email, setEmail, error, setError, onSubmit, auth_loading } =
    ForgotPasswordFunctional();
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
          value={email}
          onChangeText={text => {
            setEmail(text);
            setError('');
          }}
        />
        {error && <ErrorText error={'Email is required'} />}
      </View>

      {auth_loading ? (
        <Loader />
      ) : (
        <Button
          buttonText={'Continue'}
          style={styles.btn}
          onPress={() => {
            if (!email) {
              setError(true);
              return;
            }
            onSubmit();
          }}
        />
      )}
      <SizedBox />
    </Container>
  );
};

export default ForgotPassword;

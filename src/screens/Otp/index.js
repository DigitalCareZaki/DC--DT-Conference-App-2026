import React from 'react';
import Container from '../../components/Container';
import { styles } from './index.styles';
import { Button, Header, Loader, SizedBox, Text } from '../../components';
import { Platform, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { navigate } from '../../navigation/service';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import OtpFunctional from './index.function';

const Otp = ({ route }) => {
  const purpose = route?.params?.purpose ?? '';

  const {
    ref,
    props,
    getCellOnLayoutHandler,
    CELL_COUNT,
    value,
    setValue,
    formatTime,
    timer,
    onPressSubmit,
    auth_loading,
  } = OtpFunctional({ purpose });

  return (
    <Container>
      <View style={styles.main_view}>
        <Header rightIcon={null} />
        <SizedBox height={SIZES.padding + SIZES.padding2} />
        <Text
          text={'OTP Verification!'}
          size={SIZES.h28}
          weight={TextWeights.heavy}
          align={'center'}
        />

        <Text
          text={
            'Check Email for the one-time code we’ve sent. Enter it below to verify and proceed.'
          }
          size={SIZES.h14}
          align={'center'}
          lineHeight={SIZES.padding + 2}
          mt={SIZES.padding2}
        />

        <SizedBox height={SIZES.padding + SIZES.padding} />

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => {
            return (
              <Text
                key={index}
                style={[
                  styles.cell,
                  {
                    borderColor: isFocused
                      ? COLORS.primary
                      : COLORS.border_light_grey_color,
                  },
                ]}
                onLayout={getCellOnLayoutHandler(index)}
                text={symbol || (isFocused ? <Cursor /> : '-')}
                weight={TextWeights.bold}
                align={'center'}
                size={SIZES.h16}
              />
            );
          }}
          // onSubmitEditing={onPressSubmit}
          // onEndEditing={onPressSubmit}
        />

        <SizedBox height={SIZES.padding2 + 4} />

        <Text
          text={
            <>
              <Text
                text={'Time Remaining:'}
                weight={TextWeights.medium}
                size={SIZES.h14}
              />

              <Text
                text={formatTime(timer)}
                weight={TextWeights.medium}
                size={SIZES.h14}
              />
            </>
          }
          weight={TextWeights.medium}
          size={SIZES.h14}
        />

        <SizedBox height={SIZES.padding2 + 4} />

        <Text
          text={'Resend Code'}
          weight={TextWeights.bold}
          size={SIZES.h12}
          textDecorationLine={'underline'}
        />
      </View>
      {auth_loading ? (
        <Loader />
      ) : (
        <Button
          buttonText={'Submit'}
          style={styles.btn}
          onPress={onPressSubmit}
        />
      )}
      <SizedBox />
    </Container>
  );
};

export default Otp;

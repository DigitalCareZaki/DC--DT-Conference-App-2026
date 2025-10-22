import React from 'react';
import Container from '../../components/Container';
import { styles } from './index.styles';
import { Button, Header, Loader, SizedBox, Text } from '../../components';
import { Platform, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { navigate } from '../../navigation/service';
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
import OtpFunctional from './index.function';
import { common_styles } from '../../utils/common_styles';

const Otp = ({ route }) => {
  const purpose = route?.params?.purpose ?? '';
  const email = route?.params?.email ?? '';

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
    onPressResend
  } = OtpFunctional({ purpose, email });

  return (
    <Container>
      <Header rightIcon={null} />
      <View style={styles.main_view}>
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

        <TouchableOpacity  onPress={onPressResend} disabled={timer > 0 || auth_loading} activeOpacity={0.6} hitSlop={common_styles.hitslop} >
          <Text
            text={'Resend Code'}
            weight={TextWeights.bold}
            size={SIZES.h12}
            color={(timer > 0 || auth_loading) ? COLORS.text_gray_color : COLORS.white}
            textDecorationLine={'underline'}
          />
        </TouchableOpacity>
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

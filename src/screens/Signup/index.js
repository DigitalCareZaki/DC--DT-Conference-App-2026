import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  Button,
  Container,
  Icons,
  Loader,
  LoaderModal,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { SIZES } from '../../constants';
import { signup_steps, TextWeights } from '../../config';
import { common_styles } from '../../utils/common_styles';
import { keyboardAvoidingBehaviour } from '../../constants/theme';
import SignupFunctional from './index.function';
import { styles } from './index.styles';
import { back_icon } from '../../assets/icons';
import {
  BasicInformation,
  SelectCategory,
  SetupPassword,
  SocialMedialinks,
} from './components';

const Signup = () => {
  const {
    auth_loading,
    selectedIndex,
    onPressButton,
    onPressBack,
    basicInfoRef,
    submitBasicInfo,
    passworkRef,
    socialMediaLinksRef,
    submitPassword,
    submitSocialMedia,
    signUpData,
    setSelectedRole,
    selectedRole,
  } = SignupFunctional();

  return (
    <Container>
      <KeyboardAvoidingView
        style={common_styles.flex_1}
        behavior={keyboardAvoidingBehaviour}
      >
        <View style={styles.main_view}>
          <ScrollView
            nestedScrollEnabled={true}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}
          >
            <TouchableOpacity
              onPress={onPressBack}
              style={styles.icon_view}
              hitSlop={common_styles.hitslop}
              activeOpacity={0.6}
            >
              <Icons name={back_icon} />
            </TouchableOpacity>

            <Text
              weight={TextWeights.bold}
              size={SIZES.h14}
              text={signup_steps?.[selectedIndex] ?? ''}
            />

            <RowView>
              {signup_steps?.map((val, ind) => (
                <View
                  key={ind?.toString()}
                  style={[
                    styles.tab,
                    selectedIndex >= ind && styles.selected_tab,
                  ]}
                />
              ))}
            </RowView>

            <Text
              text={`Step 0${selectedIndex + 1}/04`}
              mt={SIZES.padding2}
              weight={TextWeights.medium}
            />
            {selectedIndex === 0 && (
              <BasicInformation
                formikRef={basicInfoRef}
                onSubmit={submitBasicInfo}
                data={signUpData}
              />
            )}
            {selectedIndex === 1 && (
              <SelectCategory
                selectedRole={selectedRole}
                setSelectedRole={setSelectedRole}
              />
            )}
            {selectedIndex === 2 && (
              <SocialMedialinks
                formikRef={socialMediaLinksRef}
                onSubmit={submitSocialMedia}
                data={signUpData}
              />
            )}
            {selectedIndex === 3 && (
              <SetupPassword
                formikRef={passworkRef}
                onSubmit={submitPassword}
                data={signUpData}
              />
            )}

            <SizedBox />

            {auth_loading ? (
              <Loader />
            ) : (
              <Button
                onPress={onPressButton}
                buttonText={selectedIndex < 2 ? 'Next' : 'Submit'}
              />
            )}

            <SizedBox />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Signup;

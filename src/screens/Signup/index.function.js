import { useRef, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { goBack, navigate } from '../../navigation/service';
import { signup_steps } from '../../config';
import { requestUserPermission } from '../../utils/notification_service';
import { signup } from '../../redux/actions/auth-action';

export default () => {
  const dispatch = useDispatch();

  const basicInfoRef = useRef(null);
  const socialMediaLinksRef = useRef(null);
  const passworkRef = useRef(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [signUpData, setSignUpData] = useState({});

  const [selectedRole, setSelectedRole] = useState(null);

  const { auth_loading } = useSelector(state => state.auth);

  const onPressBack = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
    else goBack();
  };

  const submitBasicInfo = values => {
    setSignUpData(prev => ({
      ...prev,
      ...values,
    }));
    setSelectedIndex(selectedIndex + 1);
  };

  const submitCategory = () => {
    if (!selectedRole) {
      Alert.alert('Please choose your role first');
      return;
    }
    setSignUpData(prev => ({
      ...prev,
      role: selectedRole?.name,
    }));
    setSelectedIndex(selectedIndex + 1);
  };

  const submitSocialMedia = values => {
    setSignUpData(prev => ({
      ...prev,
      ...values,
    }));
    setSelectedIndex(selectedIndex + 1);
  };

  const submitPassword = async values => {
    const fcmToken = await requestUserPermission();
    setSignUpData(prev => ({
      ...prev,
      ...values,
    }));

    const cleanedRole =
      signUpData?.role === 'Exhibitor (Stall Owner)'
        ? 'Exhibitor'
        : signUpData?.role;

    const apiData = {
      name: signUpData?.name,
      email: signUpData?.email,
      password: values.password,
      role: cleanedRole,
      facebookLink: signUpData?.facebookLink,
      instagramLink: signUpData?.instagramLink,
      linkedinLink: signUpData?.linkedinLink,
      youtubeLink: signUpData?.youtubeLink,
      twitterLink: signUpData?.twitterLink,
      fcmToken: fcmToken,
    };

    dispatch(
      signup(apiData, () => {
        navigate('Otp', {
          purpose: 'ACCOUNT_VERIFICATION',
          email: signUpData?.email,
        });
      }),
    );
  };

  const onPressButton = async () => {
    Keyboard.dismiss();

    if (selectedIndex < signup_steps?.length) {
      try {
        switch (selectedIndex) {
          case 0:
            basicInfoRef.current?.handleSubmit();
            break;
          case 1:
            submitCategory();
          case 2:
            socialMediaLinksRef.current?.handleSubmit();
            break;
          case 3:
            passworkRef.current?.handleSubmit();
            break;
          default:
            setSelectedIndex(selectedIndex + 1);
            break;
        }
      } catch (e) {}
    } else navigate('Dashboard');
  };

  return {
    onPressButton,
    auth_loading,
    selectedIndex,
    onPressBack,
    basicInfoRef,
    submitBasicInfo,
    passworkRef,
    socialMediaLinksRef,
    submitCategory,
    submitPassword,
    submitSocialMedia,
    signUpData,
    setSelectedRole,
    selectedRole,
  };
};

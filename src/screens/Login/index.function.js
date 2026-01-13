import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, resetNavigationStack } from '../../navigation/service';
import {
  appleLogin,
  googleLogin,
  login,
} from '../../redux/actions/auth-action';
import { getGoogleToken } from '../../utils/functions';
import { appleAuth } from '@invertase/react-native-apple-authentication';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading, google_signin_loading, apple_signin_loading } = useSelector(
    state => state.auth,
  );

  const onPressLogin = async values => {
    Keyboard.dismiss();
    const apiData = {
      email: values.email,
      password: values?.password,
      role: values?.role,
    };
    dispatch(
      login(apiData, res => {
        if (res?.data?.user?.isVerified) {
          navigate('DrawerNavigation');
        } else {
          navigate('Otp', {
            purpose: 'ACCOUNT_VERIFICATION',
            email: values?.email,
          });
        }
      }),
    );
  };

  const onPressGoogleBtn = async () => {
    try {
      const data = await getGoogleToken();

      if (data?.user) {
        const apiData = {
          email: data?.user?.email,
          role: 'Visitor',
        };

        dispatch(
          googleLogin(apiData, res => {
            if (res?.data?.user?.companyName) {
              resetNavigationStack('DrawerNavigation');
            } else {
              navigate('CompanyInformation');
            }
          }),
        );
      }
    } catch (error) {}
  };

  const onAppleLogin = async () => {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
    });
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    if (credentialState === appleAuth.State.AUTHORIZED) {
      const { fullName, email, identityToken, user } = appleAuthRequestResponse;
      const userData = {
        role: 'Visitor',
        name: fullName?.givenName,
        email: email?.toLowerCase(),
        appleUserId: user,
      };
      dispatch(
        appleLogin(userData, res => {
          if (res?.data?.user?.companyName) {
            resetNavigationStack('DrawerNavigation');
          } else {
            navigate('CompanyInformation');
          }
        }),
      );
    }
  };

  return {
    onPressLogin,
    auth_loading,
    onPressGoogleBtn,
    onAppleLogin,
    google_signin_loading,
    apple_signin_loading,
  };
};

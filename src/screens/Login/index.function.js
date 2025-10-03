import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../navigation/service';
import { googleLogin, login } from '../../redux/actions/auth-action';
import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/auth-slice';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading, google_signin_loading } = useSelector(
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
      login(apiData, () => {
        navigate('DrawerNavigation');
      }),
    );
  };

  const onPressGoogleBtn = async values => {
    try {
      if (!values?.role) {
        Alert.alert('Please select the role first');
        return;
      }
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        const apiData = {
          email: response?.data?.user?.email,
          role: values?.role,
        };
        dispatch(
          googleLogin(apiData, res => {
            dispatch(setUser(res?.data?.user));
            navigate('DrawerNavigation');
          }),
        );
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            console.log('Signin in-progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log('Play services not available or outdated');
            break;
          default:
            console.log('some other error happened');
        }
      }
    }
  };

  return {
    onPressLogin,
    auth_loading,
    onPressGoogleBtn,
    google_signin_loading,
  };
};

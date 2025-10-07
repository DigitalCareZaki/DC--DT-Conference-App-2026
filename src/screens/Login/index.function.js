import { Alert, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../navigation/service';
import { googleLogin, login } from '../../redux/actions/auth-action';
import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/auth-slice';
import { getGoogleToken, showToast } from '../../utils/functions';

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
        showToast('error', 'Please select the role first');
        return;
      }

      const data = await getGoogleToken()

      if (data?.user) {
        const apiData = {
          email: data?.user?.email,
          role: values?.role,
        };

        dispatch(googleLogin(apiData));
      }
    } catch (error) {
    }
  };

  return {
    onPressLogin,
    auth_loading,
    onPressGoogleBtn,
    google_signin_loading,
  };
};

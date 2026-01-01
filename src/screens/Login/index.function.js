import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { navigate, resetNavigationStack } from '../../navigation/service';
import { googleLogin, login } from '../../redux/actions/auth-action';
import { getGoogleToken } from '../../utils/functions';
import { setToastData } from '../../redux/slices/auth-slice';

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

  const onPressGoogleBtn = async values => {
    try {
      if (!values?.role) {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'Please select the role first',
            is_error: true,
          }),
        );
        return;
      }

      const data = await getGoogleToken();

      if (data?.user) {
        const apiData = {
          email: data?.user?.email,
          role: values?.role,
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

  return {
    onPressLogin,
    auth_loading,
    onPressGoogleBtn,
    google_signin_loading,
  };
};

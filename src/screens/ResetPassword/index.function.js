import { useDispatch, useSelector } from 'react-redux';
import { navigate } from '../../navigation/service';
import { resetPassword } from '../../redux/actions/auth-action';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading, user_email, reset_password_token } = useSelector(
    state => state.auth,
  );

  const onPressSubmit = values => {
    const apiData = {
      email: user_email,
      newPassword: values?.password,
      token: reset_password_token,
    };

    dispatch(
      resetPassword(apiData, () => {
        navigate('Login');
      }),
    );
  };
  return {
    onPressSubmit,
    auth_loading,
  };
};

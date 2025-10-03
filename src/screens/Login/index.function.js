import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  goBack,
  navigate,
  resetNavigationStack,
} from '../../navigation/service';
import { login } from '../../redux/actions/auth-action';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading } = useSelector(state => state.auth);

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

  return {
    onPressLogin,
    auth_loading,
  };
};

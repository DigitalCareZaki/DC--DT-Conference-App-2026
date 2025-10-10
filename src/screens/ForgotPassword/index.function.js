import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../../redux/actions/auth-action';
import { navigate } from '../../navigation/service';
import { Keyboard } from 'react-native';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = () => {
    Keyboard.dismiss();
    dispatch(
      sendOtp({ email: email }, () => {
        navigate('Otp', { purpose: 'RESET_PASSWORD' });
      }),
    );
  };

  return {
    email,
    setEmail,
    error,
    setError,
    onSubmit,
    auth_loading,
  };
};

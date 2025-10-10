import { useEffect, useState } from 'react';
import {
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp } from '../../redux/actions/auth-action';
import { navigate } from '../../navigation/service';

export default ({ purpose, email }) => {
  const dispatch = useDispatch();

  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState(300);

  const { auth_loading, user_email } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.constant);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  useEffect(() => {
    if (timer === 0) return;

    const timerId = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timer]);

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const onPressSubmit = () => {
    const apiData = {
      email: purpose === 'ACCOUNT_VERIFICATION' ? email : user_email,
      purpose: purpose,
      otp: value,
    };
    dispatch(
      verifyOtp(apiData, () => {
        navigate(
          purpose === 'ACCOUNT_VERIFICATION' ? 'Login' : 'ResetPassword',
        );
      }),
    );
  };

  return {
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
  };
};

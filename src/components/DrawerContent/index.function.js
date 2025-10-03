import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/auth-slice';
import { navigate } from '../../navigation/service';

export default () => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.auth);

  const [showModal, setShowModal] = useState(false);
  GoogleSignin.configure();

  const onPressLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(setUser(null));
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
    // dispatch(logoutUser(apiData))
  };

  return {
    dispatch,
    onPressLogout,
    setShowModal,
    showModal,
    user,
  };
};

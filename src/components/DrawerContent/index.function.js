import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/constant-slice';
import { deleteAccount } from '../../redux/actions/auth-action';
import { showToast } from '../../utils/functions';

export default () => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.constant);
  const { auth_loading } = useSelector(state => state.auth);

  const [showModal, setShowModal] = useState(false);
  const [showDeleteAccModal, setShowDeleteAccModal] = useState(false);

  GoogleSignin.configure();

  const onPressLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(setUser(null));
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressDeleteAcc = () => {
    if (!user) {
      setShowDeleteAccModal(false);
      showToast('error', 'User Not Found');
      return;
    }
    dispatch(deleteAccount(user?._id));
  };
  return {
    dispatch,
    onPressLogout,
    setShowModal,
    showModal,
    user,
    setShowDeleteAccModal,
    showDeleteAccModal,
    onPressDeleteAcc,
    auth_loading,
  };
};

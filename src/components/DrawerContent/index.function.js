import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/constant-slice';
import { deleteAccount } from '../../redux/actions/auth-action';
import { setFeedback } from '../../redux/slices/main-slice';
import { setToastData } from '../../redux/slices/auth-slice';

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
      dispatch(setFeedback(null));
      setShowModal(false);
      setTimeout(() => {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'Logout Successfully',
            is_error: false,
          }),
        );
      }, 500);
    } catch (error) {
      console.error(error);
    }
  };

  const onPressDeleteAcc = () => {
    if (!user) {
      setShowDeleteAccModal(false);
      setTimeout(() => {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'User Not Found',
            is_error: true,
          }),
        );
      }, 500);
      return;
    }
    dispatch(deleteAccount(user?._id, () => setShowDeleteAccModal(false)));
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

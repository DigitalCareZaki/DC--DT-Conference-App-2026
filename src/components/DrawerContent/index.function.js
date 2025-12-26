import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { setUser } from '../../redux/slices/constant-slice';
import { deleteAccount } from '../../redux/actions/auth-action';
import { setFeedback } from '../../redux/slices/main-slice';
import { setToastData } from '../../redux/slices/auth-slice';
import { getFeedBack } from '../../redux/actions/main-action';
import { useFocusEffect } from '@react-navigation/native';
import { navigate } from '../../navigation/service';

export default () => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.constant);
  const { auth_loading } = useSelector(state => state.auth);
  const { feedback } = useSelector(state => state.main);

  const [showModal, setShowModal] = useState({
    logoutModal: false,
    deleteModal: false,
    feedbackModal: false,
  });

  GoogleSignin.configure();

  const onPressLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(setUser(null));
      dispatch(setFeedback(null));
      setShowModal(prev => ({
        ...prev,
        logoutModal: false,
      }));
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
    }
  };

  const onDrawerItemPress = item => {
    if (item?.isLogout) {
      if (user) {
        setShowModal(prev => ({ ...prev, logoutModal: true }));
      } else {
        navigate('Login');
      }
      return;
    }

    if (item?.isDeleteAccount) {
      setShowModal(prev => ({ ...prev, deleteModal: true }));
      return;
    }

    if (item?.isFeedback) {
      if (feedback) {
        setShowModal(prev => ({ ...prev, feedbackModal: true }));
      } else {
        navigate('Feedback');
      }
      return;
    }

    const requiresLogin =
      (item?.name === 'My Favourites' ||
        item?.name === 'Ask A Question' ||
        item.name === 'Social Media links') &&
      !user;

    if (requiresLogin) {
      navigate('Login');
    } else {
      navigate(item?.route);
    }
  };

  const onPressDeleteAcc = () => {
    if (!user) {
      setShowModal(prev => ({
        ...prev,
        deleteModal: false,
      }));

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
    dispatch(
      deleteAccount(
        user?._id,
        () =>
          setShowModal(prev => ({
            ...prev,
            deleteModal: false,
          })),
        dispatch(setFeedback(null)),
      ),
    );
  };
  useFocusEffect(
    useCallback(() => {
      if (user) {
        dispatch(getFeedBack());
      }
    }, []),
  );

  return {
    dispatch,
    onPressLogout,
    setShowModal,
    showModal,
    user,
    onPressDeleteAcc,
    auth_loading,
    feedback,
    onDrawerItemPress,
  };
};

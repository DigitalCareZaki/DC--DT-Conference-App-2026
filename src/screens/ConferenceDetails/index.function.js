import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';
import { Alert, Linking } from 'react-native';

export default ({ id }) => {
  const dispatch = useDispatch();

  const { detail_loading, conference_detail } = useSelector(
    state => state.main,
  );
  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    dispatch(getConference(id));
  }, []);

  const onPressHeart = (item, index) => {
    if (!user) {
      navigate('Login');
      return;
    }
    dispatch(setSelectedItemIndex(index));

    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onPressRegister = () => {
    const url = `mailto:${conference_detail?.url}`;

    Linking.openURL(url).catch(e => {
      Alert.alert('Error', 'Could not open mail app');
    });
  };
  return {
    detail_loading,
    conference_detail,
    onPressHeart,
    onPressRegister,
  };
};

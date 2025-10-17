import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';
import { Alert, Linking } from 'react-native';
import { website_url } from '../../config';

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
    if (conference_detail?.url) {
      const url = conference_detail?.url;
      Linking.openURL(url).catch(e => {
        Alert.alert('Error', e);
      });
      return;
    }
  };
  
  return {
    detail_loading,
    conference_detail,
    onPressHeart,
    onPressRegister,
  };
};

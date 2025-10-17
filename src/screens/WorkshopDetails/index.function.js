import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getWorkshop } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { navigate } from '../../navigation/service';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';
import { Alert, Linking } from 'react-native';
import { url_regix } from '../../utils/functions';

export default ({ data }) => {
  const dispatch = useDispatch();

  const { detail_loading, workshop_detail } = useSelector(state => state.main);

  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    dispatch(getWorkshop(data?._id));
  }, []);

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
    dispatch(setSelectedItemIndex(12));
    const apiData = {
      favoriteId: item?._id,
      type: 'workshop',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onPressRegister = () => {
    if (workshop_detail?.url && url_regix.test(workshop_detail?.url)) {
      const formattedLink = workshop_detail?.url?.startsWith('http')
        ? workshop_detail?.url
        : `https://${workshop_detail?.url}`;

      Linking.openURL(formattedLink);
      return;
    }
  };

  return {
    detail_loading,
    workshop_detail,
    onPressHeart,
    dispatch,
    onPressRegister,
  };
};

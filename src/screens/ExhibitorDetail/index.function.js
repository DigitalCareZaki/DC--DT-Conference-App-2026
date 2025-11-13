import { Linking } from 'react-native';
import { isIOS } from '../../constants/theme';
import { navigate } from '../../navigation/service';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav } from '../../redux/actions/main-action';
import { url_regix } from '../../utils/functions';

export default item => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.constant);

  const handleOpenMaps = () => {
    const latitude = 24.9019;
    const longitude = 67.0767;
    const label = 'Expo Centre Karachi Block 15';

    const url = isIOS
      ? `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`
      : `geo:${latitude},${longitude}?q=${label}`;

    Linking.openURL(url).catch(err => {});
  };

  const onPressHeart = async () => {
    if (!user) {
      navigate('Login');
      return;
    }

    const apiData = {
      favoriteId: item?._id,
      type: 'exhibition',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onPressLink = () => {
    if (item?.contactLink && url_regix.test(item?.contactLink)) {
      const formattedLink = item?.contactLink?.startsWith('http')
        ? item?.contactLink
        : `https://${item?.contactLink}`;

      Linking.openURL(formattedLink);
      return;
    }
  };

  return {
    handleOpenMaps,
    onPressHeart,
    onPressLink,
  };
};

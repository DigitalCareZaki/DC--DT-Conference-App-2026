import { Linking } from 'react-native';
import { isIOS } from '../../constants/theme';
export default () => {
  const handleOpenMaps = () => {
    const latitude = 24.9019;
    const longitude = 67.0767;
    const label = 'Expo Centre Karachi Block 15';

    const url = isIOS
      ? `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`
      : `geo:${latitude},${longitude}?q=${label}`;

    Linking.openURL(url).catch(err => {});
  };

  return {
    handleOpenMaps,
  };
};

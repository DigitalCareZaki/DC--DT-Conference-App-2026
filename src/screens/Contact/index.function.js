import { Alert, Linking } from 'react-native';
import { useSelector } from 'react-redux';

export default () => {
  const { user } = useSelector(state => state.constant);

  const onSubmit = values => {
    const url = `mailto:${'info@ecgateway.net'}?subject=${encodeURIComponent(
      values?.subject,
    )}&body=${encodeURIComponent(values?.message)}`;

    Linking.openURL(url).catch(e => {
      Alert.alert('Error', 'Could not open mail app');
    });
  };

  return {
    user,
    onSubmit,
  };
};

import { StyleSheet } from 'react-native';
import { ImageView } from '../../../components';
import { SIZES } from '../../../constants';
import FastImage from 'react-native-fast-image';

const SingleGalleryView = ({ item, onPress }) => {
  return (
    <ImageView
      onPress={onPress}
      url={item.image}
      height={SIZES.padding * 7.5}
      width={'48%'}
      resizeMode={FastImage.resizeMode.stretch}
      radius={SIZES.padding2 * 1.3}
      style={styles.main_view}
    />
  );
};

export default SingleGalleryView;

const styles = StyleSheet.create({
  main_view: {
    marginTop: SIZES.padding2,
  },
});

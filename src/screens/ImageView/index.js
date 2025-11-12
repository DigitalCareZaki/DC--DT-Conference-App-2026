import { View } from 'react-native';
import { Button, Container, Header } from '../../components';
import { COLORS } from '../../constants';
import { styles } from './index.styles';
import ImageViewFunctional from './index.function';

const ImageView = ({ route }) => {
  const image = route?.params?.image;
  const { onPressDownload } = ImageViewFunctional();

  return (
    <Container backgroundImage={image}>
      <Header color={COLORS.white} rightIcon={null} />

      <View style={styles.main_view}>
        <Button buttonText={'Download Hall Map'} onPress={() => onPressDownload(image)} />
      </View>
    </Container>
  );
};

export default ImageView;

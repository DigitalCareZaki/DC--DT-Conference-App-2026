import React from 'react';
import { Container, Header, SizedBox, Text } from '../../components';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import ExhibitionDetailFunctional from './index.function';
import { SingleExhibitorView } from './components';
import { navigate } from '../../navigation/service';

const ExhibitorDetail = ({ route }) => {
  const item = route?.params?.item;
  const { handleOpenMaps, onPressHeart, onPressLink } = ExhibitionDetailFunctional(item);

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibitor Detail'} />

      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SingleExhibitorView item={item} onPressHeart={onPressHeart} onPressLink={onPressLink} />

          <Text
            mt={SIZES.padding2}
            text={'Hall Map'}
            size={SIZES.h18}
            weight={TextWeights.medium}
          />

          <TouchableOpacity activeOpacity={0.6} onPress={() => navigate('ImageView', { image: item?.location })}>
            <FastImage
              style={styles.map_view}
              resizeMode={FastImage.resizeMode.cover}
              source={{uri: item?.location}}
            >
              {/* <Text
                weight={TextWeights.medium}
                size={SIZES.h14}
                lineHeight={SIZES.padding}
                ml={SIZES.padding2}
                mr={SIZES.padding2}
                mb={SIZES.padding2}
                text={
                  'Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan'
                }
              /> */}
            </FastImage>
          </TouchableOpacity>

          <SizedBox />
        </ScrollView>
      </View>
    </Container>
  );
};

export default ExhibitorDetail;

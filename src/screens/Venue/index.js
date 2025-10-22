import React from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  ImageView,
  SizedBox,
  Text,
} from '../../components';
import { Linking, View } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { location_marker_icon } from '../../assets/icons';
import FastImage from 'react-native-fast-image';
import { common_styles } from '../../utils/common_styles';
import { isIOS } from '../../constants/theme';

const Venue = () => {

  const handleOpenMaps = () => {
    const latitude = 24.9019;
    const longitude = 67.0767;
    const label = 'Expo Centre Karachi Block 15';

    const url = isIOS
      ? `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`
      : `geo:${latitude},${longitude}?q=${label}`;

    Linking.openURL(url).catch(err => {});
  };

  return (
    <Container>
      <Header color={COLORS.white} title={'Venue'} />

      <View style={styles.main_view}>
        <View style={styles.top_view}>
          <Icons name={location_marker_icon} />
          <Text
            text={
              'Expo Centre Main Main University Rd, Block 15 Gulshan-e-Iqbal, Karachi'
            }
            lineHeight={20}
            size={SIZES.h16}
            weight={TextWeights.medium}
            align={'center'}
            mt={SIZES.padding}
          />
        </View>
        <SizedBox />
        <ImageView
          width={'100%'}
          style={common_styles.flex_1}
          image={images.venue_image}
          radius={SIZES.padding2}
          resizeMode={FastImage.resizeMode.cover}
        />
        <SizedBox />
        <Button buttonText={'View on Google Map'} onPress={handleOpenMaps} />
        <SizedBox />
      </View>
    </Container>
  );
};

export default Venue;

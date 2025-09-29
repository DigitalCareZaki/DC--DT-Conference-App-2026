import React from 'react';
import {
  Button,
  Container,
  Header,
  Icons,
  ImageView,
  RowView,
  Text,
} from '../../components';
import { ScrollView } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import { location_marker_icon } from '../../assets/icons';
import FastImage from 'react-native-fast-image';

const Venue = () => {
  return (
    <Container>
      <Header color={COLORS.white} title={'Venue'} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <RowView
          gap={SIZES.padding2 + 4}
          direction={'column'}
          style={styles.grid}
        >
          <Icons name={location_marker_icon} />
          <Text
            text={
              'Expo Centre Main Main University Rd, Block 15 Gulshan-e-Iqbal, Karachi'
            }
            lineHeight={20}
            size={SIZES.h16}
            weight={TextWeights.medium}
            align={'center'}
          />
        </RowView>
        <ImageView
          width={SIZES.padding * 18}
          height={SIZES.padding * 22 + 9}
          image={images.map_image}
          resizeMode={FastImage.resizeMode.cover}
          style={{ alignSelf: 'center' }}
        />
        <Button buttonText={'View on Google Map'} />
      </ScrollView>
    </Container>
  );
};

export default Venue;

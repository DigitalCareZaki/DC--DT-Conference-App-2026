import React from 'react';
import {
  Button,
  Card,
  Container,
  Header,
  ImageView,
  SizedBox,
  Text,
} from '../../components';
import { ScrollView } from 'react-native';
import { styles } from './index.styles';
import { COLORS, images, SIZES } from '../../constants';
import { TextWeights } from '../../config';

const Dashboard = () => {
  return (
    <Container>
      <Header title={'About Organizers'} color={COLORS.white} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <ImageView
          image={images.organizer_banner_image}
          width={SIZES.padding * 16}
          height={SIZES.padding * 9}
          radius={SIZES.padding2}
          style={styles.banner}
        />

        <Text
          text={'Company Profile'}
          size={SIZES.h18}
          weight={TextWeights.medium}
        />

        <Text
          text={
            'OFFICIAL Customize Stall Construction Department Ecommerce Gateway Pakistan (Pvt) Ltd'
          }
          size={SIZES.h14}
          weight={TextWeights.medium}
          lineHeight={SIZES.padding}
          mt={SIZES.padding2 + 4}
        />

        <SizedBox />
        <Card isOrganizer />

        <SizedBox />

        <Button buttonText={'Go to Website'} />
        <SizedBox />

        <Button style={styles.btn} color={'white'} buttonText={'Messages'} />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;

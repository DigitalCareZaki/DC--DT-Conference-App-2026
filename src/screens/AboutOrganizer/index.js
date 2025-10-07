import React from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  ImageView,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { Linking, ScrollView, View } from 'react-native';
import { styles } from './index.styles';
import { COLORS, images, SIZES } from '../../constants';
import { TextWeights, website_url } from '../../config';
import FastImage from 'react-native-fast-image';
import { common_styles } from '../../utils/common_styles';

const Dashboard = () => {
  return (
    <Container>
      <Header title={'About Organizers'} color={COLORS.white} />

      <View style={styles.main_view} >

        <ScrollView showsVerticalScrollIndicator={false}  >
          <ImageView
            image={images.organizer_banner_image}
            height={SIZES.padding * 8.2}
            width={"100%"}
            radius={SIZES.padding2}
            resizeMode={FastImage.resizeMode.contain}
          />

          <Text
            text={'Company Profile'}
            size={SIZES.h16}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />

          <Text
            text={'OFFICIAL Customize Stall Construction Department Ecommerce Gateway Pakistan (Pvt) Ltd'}
            weight={TextWeights.medium}
            lineHeight={SIZES.padding}
            mt={SIZES.padding2}
          />

          <View style={styles.detail_view} >

            <Text
              text={"Address"}
              weight={TextWeights.light}
              size={SIZES.h10}
            />

            <Text
              text={"Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan"}
              weight={TextWeights.medium}
              mt={SIZES.padding2 / 2}
              lineHeight={SIZES.padding2 * 1.3}
            />

            <SizedBox height={SIZES.padding2} />

            <RowView>
              <View style={styles.left_view} >
                <Text size={SIZES.h11} text={"Email"} weight={TextWeights.light} />
                <Text mt={SIZES.padding2 / 2} text={"design@ecgateway.net"} />
              </View>

              <View style={common_styles.flex_1} >
                <Text size={SIZES.h11} text={"Mobile"} weight={TextWeights.light} />
                <Text mt={SIZES.padding2 / 2} text={"+92 300 0568711"} />
              </View>
            </RowView>

            <SizedBox height={SIZES.padding2} />

            <RowView>
              <View style={styles.left_view} >
                <Text size={SIZES.h11} text={"WhatsApp"} weight={TextWeights.light} />
                <Text mt={SIZES.padding2 / 2} text={"+92 300 0568711"} />
              </View>

              <View style={common_styles.flex_1} >
                <Text size={SIZES.h11} text={"WeCHat"} weight={TextWeights.light} />
                <Text mt={SIZES.padding2 / 2} text={"ecgateway13"} />
              </View>
            </RowView>


            <Text mt={SIZES.padding2} size={SIZES.h11} text={"UAN"} weight={TextWeights.light} />
            <Text mt={SIZES.padding2 / 2} text={"+ 92 21 111-222-444, Ext: 343,229, 247,238,343"} />

            <Text mt={SIZES.padding2} size={SIZES.h11} text={"PTCL"} weight={TextWeights.light} />
            <Text mt={SIZES.padding2 / 2} text={"+ 92 21 3870-9970"} />

          </View>

          <Button  onPress={() => Linking.openURL(website_url)} buttonText={'Go to Website'} />

          <Button style={styles.btn} color={'white'} buttonText={'Messages'} />

          <SizedBox />

        </ScrollView>

      </View>
    </Container>
  );
};

export default Dashboard;

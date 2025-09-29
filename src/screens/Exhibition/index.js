import React, { useState } from 'react';
import {
  Button,
  Container,
  Header,
  ImageView,
  RowView,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, ScrollView, View } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { ExhibitionArr, TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

const Exhibition = () => {
  const renderItem = ({ item }) => (
    <View direction={'column'} style={styles.grid}>
      <RowView justifyContent={'space-between'}>
        <Text size={SIZES.h16} weight={TextWeights.medium} text={item.title} />
        <Button
          buttonText={'Booth A-101'}
          style={styles.btn}
          color={COLORS.placeholder_text_color}
          size={SIZES.h12}
          weight={TextWeights.regular}
        />
      </RowView>
      <Text
        mt={SIZES.padding2 + 4}
        text={
          <>
            <Text
              size={SIZES.h12}
              weight={TextWeights.medium}
              color={COLORS.text_aqua_color}
              text={item.city}
            />
            <Text text={' - '} color={COLORS.keys_color} />
            <Text
              size={SIZES.h12}
              weight={TextWeights.medium}
              color={COLORS.text_aqua_color}
              text={item.postion}
            />
          </>
        }
      />

      <Text
        mt={SIZES.padding2 - 4}
        text={
          <>
            <Text text={'Venue:'} color={COLORS.keys_color} />
            <Text text={item.venue} />
          </>
        }
      ></Text>

      <Text
        size={SIZES.h14}
        mt={SIZES.padding2 + 4}
        text={item.description}
        lineHeight={SIZES.padding2 + 4}
      />
    </View>
  );
  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibition'} />
      <ScrollView
        style={styles.main_view}
        contentContainerStyle={styles.scrollViewStyle}
      >
        <SearchBar
          isRight
          isLeft={false}
          placeholder={'Search by name, industry category, city...'}
        />

        <SizedBox />

        <Text
          text={'3 Exhibitors Participating'}
          size={SIZES.h18}
          weight={TextWeights.medium}
        />

        <FlatList
          renderItem={renderItem}
          data={ExhibitionArr}
          style={{ marginTop: SIZES.padding }}
          contentContainerStyle={{ gap: SIZES.padding2 + 4 }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />

        <SizedBox />

        <Button buttonText={'Download List in PDF'} />

        <Text
          mt={SIZES.padding + 4}
          text={'Hall Map'}
          size={SIZES.h18}
          weight={TextWeights.medium}
        />

        <SizedBox />

        <View style={styles.mapView}>
          <ImageView
            image={images.map_image}
            width={SIZES.padding * 17}
            height={SIZES.padding * 9}
            resizeMode={FastImage.resizeMode.cover}
            radius={SIZES.padding2}
            style={styles.map}
            gradientColors={['transparent', 'rgba(0,0,0,0.6)']}
          />
          <Text
            style={styles.mapText}
            weight={TextWeights.medium}
            size={SIZES.h14}
            lineHeight={SIZES.padding}
            text={
              'Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan'
            }
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Exhibition;

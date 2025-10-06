import React, { useCallback } from 'react';
import {
  Button,
  Container,
  Header,
  ImageView,
  Loader,
  LoaderModal,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, ScrollView, View } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import ExhibitionCard from './component/ExhibitionCard';
import ExhibitionFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getExhibition } from '../../redux/actions/main-action';

const Exhibition = () => {
  const { main_loading, exhibition, setHasMore, onEndReached, page, dispatch } =
    ExhibitionFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: page,
      };
      dispatch(
        getExhibition(payload, exhibition, hasMore => {
          setHasMore(hasMore);
        }),
      );
    }, []),
  );

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibition'} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <ScrollView
            contentContainerStyle={styles.scrollViewStyle}
            showsVerticalScrollIndicator={false}
          >
            <SearchBar
              isRight
              isLeft={false}
              placeholder={'Search by name, industry category, city...'}
            />

            <SizedBox />

            <Text
              text={`${exhibition?.length} Exhibitors Participating`}
              size={SIZES.h18}
              weight={TextWeights.medium}
            />

            <FlatList
              renderItem={({ item }) => <ExhibitionCard item={item} />}
              data={exhibition}
              keyExtractor={item => item?._id?.toString()}
              ListHeaderComponent={<SizedBox height={SIZES.padding2} />}
              ListFooterComponent={
                main_loading && page > 1 ? <Loader /> : <SizedBox />
              }
              onEndReached={onEndReached}
              onEndReachedThreshold={0.1}
              contentContainerStyle={styles.flatlist}
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
        </View>
      )}
    </Container>
  );
};

export default Exhibition;

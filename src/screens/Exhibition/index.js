import React from 'react';
import {
  Button,
  Container,
  Header,
  ImageView,
  ListEmptyText,
  Loader,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, View } from 'react-native';
import { COLORS, images, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import FastImage from 'react-native-fast-image';
import ExhibitionCard from './component/ExhibitionCard';
import ExhibitionFunctional from './index.function';

const Exhibition = () => {
  const {
    exhibition,
    onEndReached,
    total_item,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
  } = ExhibitionFunctional();

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibition'} />

      {list_loading && !isMore ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmptyText text={'No Exhibition found'} />}
            refreshControl={
              <RefreshControl refreshing={refeshing} onRefresh={onRefresh} />
            }
            ListHeaderComponent={
              <>
                <SearchBar
                  isRight
                  isLeft={false}
                  placeholder={'Search by name, industry category, city...'}
                />

                <SizedBox />

                <Text
                  text={`${total_item} Exhibitors Participating`}
                  size={SIZES.h18}
                  weight={TextWeights.medium}
                />
              </>
            }
            ListFooterComponent={
              <>
                {list_loading && isMore ? (
                  <Loader style={styles.loader} />
                ) : (
                  <SizedBox />
                )}

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
              </>
            }
            renderItem={({ item }) => <ExhibitionCard item={item} />}
            data={exhibition}
            keyExtractor={item => item?._id?.toString()}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            contentContainerStyle={styles.flatlist}
          />
        </View>
      )}
    </Container>
  );
};

export default Exhibition;

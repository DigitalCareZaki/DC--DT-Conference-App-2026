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
import { searchArray } from '../../utils/functions';

const Exhibition = () => {
  const {
    exhibition,
    onEndReached,
    total_item,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
    search,
    setSearch
  } = ExhibitionFunctional();

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibition'} />

      <View style={styles.main_view}>

        <SearchBar
          placeholder={'Search by name, industry category, city...'}
          value={search}
          onChangeText={setSearch}
        />



        <Text
          text={`${total_item ?? 0} Exhibitors Participating`}
          size={SIZES.h16}
          weight={TextWeights.medium}
          mt={SIZES.padding2}
        />

        {list_loading && !isMore ? (
          <Loader />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<ListEmptyText text={'No Exhibition found'} />}
            refreshControl={
              <RefreshControl refreshing={refeshing} onRefresh={onRefresh} />
            }
            ListFooterComponent={
              <>
                {list_loading && isMore ? (
                  <Loader style={styles.loader} />
                ) : (
                  <SizedBox />
                )}

                <Button buttonText={'Download List in PDF'} />

                <Text
                  mt={SIZES.padding2}
                  text={'Hall Map'}
                  size={SIZES.h18}
                  weight={TextWeights.medium}
                />

                <FastImage
                  style={styles.map_view}
                  resizeMode={FastImage.resizeMode.contain}
                  source={images.map_image} >
                  <Text
                    weight={TextWeights.medium}
                    size={SIZES.h14}
                    lineHeight={SIZES.padding}
                    ml={SIZES.padding2}
                    mr={SIZES.padding2}
                    mb={SIZES.padding2}
                    text={
                      'Ecommerce Gateway Pakistan (Pvt) Ltd.8, Kokan Society, Dr. Azhar Hussain Road, Near Kokan Park, off: Shaheed-e-Millat Road, Karachi-74000 Pakistan'
                    }
                  />
                </FastImage>

                <SizedBox />
              </>
            }
            renderItem={({ item }) => <ExhibitionCard item={item} />}
            data={search ? searchArray(exhibition, search) : exhibition}
            keyExtractor={item => item?._id?.toString()}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
          // contentContainerStyle={styles.flatlist}
          />
        )}
      </View>
    </Container>
  );
};

export default Exhibition;

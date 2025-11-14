import React from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, View } from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { styles } from './index.styles';
import { TextWeights } from '../../config';
import ExhibitionCard from './component/ExhibitionCard';
import ExhibitionFunctional from './index.function';
import { searchArray } from '../../utils/functions';

const Exhibition = () => {
  const {
    exhibition,
    onEndReached,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
    search,
    setSearch,
    onPressHeart,
    total_item,
  } = ExhibitionFunctional();

  return (
    <Container>
      <Header color={COLORS.white} title={'Exhibitors'} />

      <View style={styles.main_view}>
        <SearchBar
          placeholder={'Search by name, industry category, city...'}
          value={search}
          onChangeText={setSearch}
        />
        {list_loading && !isMore ? (
          <Loader />
        ) : (
          <>
            <Text
              text={`${total_item} Exhibitors Participating`}
              size={SIZES.h16}
              weight={TextWeights.medium}
              mt={SIZES.padding2}
              mb={SIZES.padding2}
            />

            <FlatList
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <ListEmptyText text={'No Exhibition found'} />
              }
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

                  <SizedBox />
                </>
              }
              renderItem={({ item, index }) => (
                <ExhibitionCard
                  index={index}
                  item={item}
                  onPressHeart={() => onPressHeart(item, index)}
                />
              )}
              data={search ? searchArray(exhibition, search) : exhibition}
              keyExtractor={item => item?._id?.toString()}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.1}
            />
          </>
        )}
      </View>

      <SizedBox height={SIZES.padding2} />

      {/* <Button
        style={styles.btn}
        buttonText={'Download List in PDF'}
        onPress={() => savePdf()}
      />
      <SizedBox /> */}
    </Container>
  );
};

export default Exhibition;

import { View, FlatList, RefreshControl } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import {
  Cards,
  Header,
  ListEmptyText,
  Loader,
  SizedBox,
  Text,
} from '../../components';
import { styles } from './index.styles';
import { navigate } from '../../navigation/service';
import ConferenceFunctional from './index.function';

const Conference = () => {
  const {
    list_loading,
    conferences,
    onPressHeart,
    onEndReached,
    total_item,
    isMore,
    onRefresh,
    refreshing,
  } = ConferenceFunctional();

  return (
    <Container>
      <Header isMenu title={'Conferences'} />

      <View style={styles.main_view}>
        {list_loading && !isMore ? (
          <Loader />
        ) : (
          <>
            <Text
              text={`${total_item} Conferences Available`}
              size={SIZES.h16}
              weight={TextWeights.medium}
              mt={SIZES.padding2}
            />

            <SizedBox height={SIZES.padding2} />

            <FlatList
              data={conferences}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              keyExtractor={item => item?._id?.toString()}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <ListEmptyText text={'No Conference Found'} />
              }
              ListFooterComponent={
                list_loading && isMore ? (
                  <Loader style={styles.loader} />
                ) : (
                  <SizedBox />
                )
              }
              onEndReached={onEndReached}
              onEndReachedThreshold={0.5}
              renderItem={({ item, index }) => (
                <Cards
                  index={index}
                  item={item}
                  onPressHeart={() => onPressHeart(item, index)}
                  onPress={() =>
                    navigate('ConferenceDetails', { id: item?._id })
                  }
                />
              )}
            />
          </>
        )}
      </View>
    </Container>
  );
};

export default Conference;

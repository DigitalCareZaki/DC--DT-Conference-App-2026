import { View, FlatList } from 'react-native';
import React, { useCallback } from 'react';
import Container from '../../components/Container';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import {
  Cards,
  Header,
  Loader,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import { styles } from './index.styles';
import { navigate } from '../../navigation/service';
import { useFocusEffect } from '@react-navigation/native';
import { getConferences, getFavourites } from '../../redux/actions/main-action';
import ConferenceFunctional from './index.function';

const Conference = () => {
  const {
    main_loading,
    conferences,
    onPressHeart,
    dispatch,
    page,
    setHasMore,
    onEndReached,
    isLoading,
    hasMore,
    total_item,
  } = ConferenceFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: page,
      };
      dispatch(
        getConferences(payload, conferences, hasMore => {
          setHasMore(hasMore);
        }),
      );
      dispatch(getFavourites(payload));
    }, []),
  );

  return (
    <Container>
      <Header isMenu title={'Conferences'} />

      {main_loading && !isLoading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <Text
            text={`${total_item} Conferences Available`}
            size={SIZES.h16}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />

          <SizedBox height={SIZES.padding2} />

          <FlatList
            data={conferences}
            keyExtractor={item => item?._id?.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              isLoading && hasMore ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => (
              <Cards
                item={item}
                onPressHeart={() => onPressHeart(item)}
                onPress={() => navigate('ConferenceDetails', { id: item?._id })}
              />
            )}
          />
        </View>
      )}
    </Container>
  );
};

export default Conference;

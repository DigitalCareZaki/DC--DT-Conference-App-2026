import { FlatList, View } from 'react-native';
import React, { useCallback } from 'react';
import {
  Cards,
  Container,
  Header,
  Loader,
  LoaderModal,
  SizedBox,
} from '../../components';
import { navigate } from '../../navigation/service';
import { styles } from './index.styles';
import { useFocusEffect } from '@react-navigation/native';
import { getFavourites, getWorkshops } from '../../redux/actions/main-action';
import WorkFunctional from './index.function';
import { SIZES } from '../../constants';

const WorkShop = () => {
  const {
    main_loading,
    workshops,
    dispatch,
    onPressHeart,
    onEndReached,
    favourites,
    setHasMoreWorkshop,
    setFavHasMore,
    hasMoreWorkshops,
    workshopLoading,
  } = WorkFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: 1,
      };
      dispatch(
        getWorkshops(payload, workshops, hasMore => {
          setHasMoreWorkshop(hasMore);
        }),
      );
      dispatch(
        getFavourites(payload, favourites, hasMore => {
          setFavHasMore(hasMore);
        }),
      );
    }, []),
  );

  return (
    <Container>
      <Header title={'Workshop'} rightIcon={null} />

      {main_loading && !workshopLoading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            data={workshops}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Cards
                isWorkshop
                item={item}
                onPressHeart={() => onPressHeart(item)}
                onPress={() => navigate('WorkShopDetails', { id: item?._id })}
              />
            )}
            ListFooterComponent={
              workshopLoading && hasMoreWorkshops ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
};

export default WorkShop;

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
import { getWorkshops } from '../../redux/actions/main-action';
import WorkFunctional from './index.function';
import { SIZES } from '../../constants';

const WorkShop = () => {
  const {
    main_loading,
    workshops,
    dispatch,
    onPressHeart,
    page,
    setHasMore,
    onEndReached,
    isLoading,
    hasMore,
  } = WorkFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: page,
      };
      dispatch(
        getWorkshops(payload, workshops, hasMore => {
          setHasMore(hasMore);
        }),
      );
    }, []),
  );

  return (
    <Container>
      <Header title={'Workshop'} rightIcon={null} />

      {main_loading && !isLoading ? (
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
              isLoading && hasMore ? (
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

import { FlatList, RefreshControl, View } from 'react-native';
import React from 'react';
import {
  Cards,
  Container,
  Header,
  ListEmptyText,
  Loader,
  SizedBox,
} from '../../components';
import { navigate } from '../../navigation/service';
import { styles } from './index.styles';
import WorkFunctional from './index.function';

const WorkShop = () => {

  const {
    workshops,
    onPressHeart,
    onEndReached,
    list_loading,
    isMore,
    onRefresh,
    refreshing,
  } = WorkFunctional();

  return (
    <Container>
      <Header title={'Workshop'} rightIcon={null} />

      <View style={styles.main_view}>
        {list_loading && !isMore ? (
          <Loader />
        ) : (
          <FlatList
            data={workshops}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            ListEmptyComponent={<ListEmptyText text={'No Workshop Found'} />}
            ListFooterComponent={
              list_loading && isMore ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
            }

            renderItem={({ item, index }) => (
              <Cards
                key={index?.toString()}
                isWorkshop
                item={item}
                index={index}
                onPressHeart={() => onPressHeart(item, index)}
                onPress={() => navigate('WorkShopDetails', { data: item })}
              />
            )}
          />
        )}
      </View>
    </Container>
  );
};

export default WorkShop;

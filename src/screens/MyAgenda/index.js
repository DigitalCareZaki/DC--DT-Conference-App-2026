import React from 'react';
import {
  Cards,
  Container,
  Header,
  ListEmptyText,
  Loader,
  SizedBox,
} from '../../components';
import { FlatList, RefreshControl, View } from 'react-native';
import { styles } from './index.styles';
import FavoutitesFunctional from './index.function';

const MyAgenda = () => {
  const { favourites, onPressHeart, onRefresh, refreshing, list_loading } =
    FavoutitesFunctional();

  return (
    <Container>
      <Header title={'My Agenda'} rightIcon={null} />

      <View style={styles.main_view}>
        {list_loading ? (
          <Loader />
        ) : (
          <FlatList
            data={favourites}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyExtractor={item => item?._id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            ListEmptyComponent={<ListEmptyText text={'No favourite found'} />}
            renderItem={({ item }) => (
              <Cards
                onPressHeart={() => onPressHeart(item)}
                isDetail={true}
                item={item}
                isFavourite={true}
              />
            )}
          />
        )}
      </View>
    </Container>
  );
};

export default MyAgenda;

import React, { useCallback } from 'react';
import {
  Cards,
  Container,
  Header,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import FavoutitesFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { getFavourites } from '../../redux/actions/main-action';
import { COLORS, SIZES } from '../../constants';

const MyAgenda = () => {
  const { main_loading, favourites, onPressHeart, dispatch } =
    FavoutitesFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getFavourites());
    }, []),
  );
  const RenderEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text text="No Favourites yet" size={SIZES.h20} color={COLORS.primary} />
    </View>
  );

  return (
    <Container>
      <Header title={'My Agenda'} rightIcon={null} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <FlatList
            data={favourites}
            keyExtractor={item => item?.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            ListEmptyComponent={<RenderEmptyComponent />}
            renderItem={({ item }) => (
              <Cards
                onPressHeart={() => onPressHeart(item)}
                isDetail={true}
                item={item}
                isFavourite={true}
              />
            )}
            contentContainerStyle={
              favourites?.length === 0
                ? { flexGrow: 1, justifyContent: 'center' }
                : null
            }
          />
        </View>
      )}
    </Container>
  );
};

export default MyAgenda;

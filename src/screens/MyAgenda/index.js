import React from 'react';
import {
  Cards,
  Container,
  Header,
  ListEmptyText,
  Loader,
  RowView,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, RefreshControl, TouchableOpacity, View } from 'react-native';
import { styles } from './index.styles';
import FavoutitesFunctional from './index.function';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';

const MyAgenda = () => {
  const {
    favourites,
    onPressHeart,
    onRefresh,
    refreshing,
    list_loading,
    activeTab,
    handleTabChange,
  } = FavoutitesFunctional();

  return (
    <Container>
      <Header title={'My Favourites'} rightIcon={null} />

      <View style={styles.main_view}>
        <RowView
          alignItems={'center'}
          justifyContent={'space-between'}
          style={styles.tabContainer}
        >
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  activeTab === 'favConferences'
                    ? COLORS.primary
                    : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('favConferences')}
          >
            <Text
              size={SIZES.h13}
              weight={TextWeights.medium}
              text={'Favorite conferences'}
              color={
                activeTab === 'favConferences' ? COLORS.white : COLORS.primary
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  activeTab === 'favExhibitors' ? COLORS.primary : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('favExhibitors')}
          >
            <Text
              size={SIZES.h13}
              weight={TextWeights.medium}
              text={'Favorite Exhibitors'}
              color={
                activeTab === 'favExhibitors' ? COLORS.white : COLORS.primary
              }
            />
          </TouchableOpacity>
        </RowView>
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
            ListEmptyComponent={<ListEmptyText text={'No Favourite found'} />}
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

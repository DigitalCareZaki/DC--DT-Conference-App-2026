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
import ExhibitionCard from '../Exhibition/component/ExhibitionCard';
import { navigate } from '../../navigation/service';

const MyAgenda = () => {
  const {
    favourites,
    onPressHeart,
    onRefresh,
    refreshing,
    list_loading,
    activeTab,
    handleTabChange,
    filteredFavourites,
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
                  activeTab === 'conference' ? COLORS.primary : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('conference')}
          >
            <Text
              size={SIZES.h13}
              weight={TextWeights.medium}
              text={'Favorite conferences'}
              color={activeTab === 'conference' ? COLORS.white : COLORS.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tab,
              {
                backgroundColor:
                  activeTab === 'exhibition' ? COLORS.primary : COLORS.white,
              },
            ]}
            onPress={() => handleTabChange('exhibition')}
          >
            <Text
              size={SIZES.h13}
              weight={TextWeights.medium}
              text={'Favorite Exhibitors'}
              color={activeTab === 'exhibition' ? COLORS.white : COLORS.primary}
            />
          </TouchableOpacity>
        </RowView>
        {list_loading ? (
          <Loader />
        ) : (
          <FlatList
            data={filteredFavourites}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            keyExtractor={item => item?._id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
            ListEmptyComponent={<ListEmptyText text={'No Favourite found'} />}
            renderItem={({ item }) =>
              item?.type === 'Exhibition' ? (
                <ExhibitionCard
                  item={item}
                  isFav={true}
                  onPressHeart={() => onPressHeart(item)}
                />
              ) : (
                <Cards
                  onPressHeart={() => onPressHeart(item)}
                  isDetail={true}
                  item={item}
                  isFavourite={true}
                  onPress={() =>
                    navigate('ConferenceDetails', { id: item?._id })
                  }
                />
              )
            }
          />
        )}
      </View>
    </Container>
  );
};

export default MyAgenda;

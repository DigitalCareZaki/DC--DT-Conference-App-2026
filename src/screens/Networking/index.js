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
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { SingleUserView } from './components';
import NetworkFunctional from './index.function';
import { searchArray } from '../../utils/functions';

const Networking = () => {
  const {
    all_users,
    onEndReached,
    hasMore,
    total_item,
    search,
    setSearch,
    auth_loading,
    onRefresh,
    refreshing,
  } = NetworkFunctional();

  return (
    <Container>
      <Header title={'Networking'} rightIcon={null} />
      {auth_loading && !hasMore ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <SearchBar
            value={search}
            onChangeText={setSearch}
            style={styles.search_bar}
            placeholder={'Search..'}
          />

          <Text
            text={`${total_item} Users Registered`}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <SizedBox height={SIZES.padding2} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={search ? searchArray(all_users, search) : all_users}
            keyExtractor={item => item?._id}
            renderItem={({ item }) => <SingleUserView item={item} />}
            ListFooterComponent={
              auth_loading && hasMore ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
            }
            ListEmptyComponent={<ListEmptyText text={'No Network Found'} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </Container>
  );
};

export default Networking;

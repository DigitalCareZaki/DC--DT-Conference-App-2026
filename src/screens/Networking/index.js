import React, { useCallback } from 'react';
import {
  Container,
  Header,
  Loader,
  LoaderModal,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { TextWeights } from '../../config';
import { SingleUserView } from './components';
import NetworkFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { getAllUsers } from '../../redux/actions/auth-action';

const Networking = () => {
  const {
    auth_loading,
    all_users,
    dispatch,
    page,
    setHasMore,
    onEndReached,
    isLoading,
    hasMore,
    total_item,
  } = NetworkFunctional();

  useFocusEffect(
    useCallback(() => {
      const payload = {
        limit: 10,
        page: page,
      };
      dispatch(
        getAllUsers(payload, all_users, hasMore => {
          setHasMore(hasMore);
        }),
      );
    }, []),
  );

  return (
    <Container>
      <Header title={'Networking'} rightIcon={null} />
      {auth_loading && !isLoading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <SearchBar style={styles.search_bar} placeholder={'Search..'} />

          <Text
            text={`${total_item} Users Registered`}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <SizedBox height={SIZES.padding2} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={all_users}
            keyExtractor={item => item?._id}
            renderItem={({ item }) => <SingleUserView item={item} />}
            ListFooterComponent={
              isLoading && hasMore ? (
                <Loader style={styles.loader} />
              ) : (
                <SizedBox />
              )
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

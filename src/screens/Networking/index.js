import React, { useCallback } from 'react';
import {
  Container,
  Header,
  ListEmptyText,
  Loader,
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
import { searchArray } from '../../utils/functions';
import { getToken } from '../../utils/functions';
import { io } from 'socket.io-client';
import { useFocusEffect } from '@react-navigation/native';

const Networking = () => {
  const { search, setSearch, allUsers, setAllUsers } =
    NetworkFunctional();
  let socket;

  const connectSocket = async () => {
    const token = await getToken();
    socket = io(`http://51.83.237.63:5057?token=${token}`);
    socket.on('connect', () => {
      socket.on('chat-list-updated', msgs => {
        setAllUsers(msgs?.chats?.data);
      });
    });
  };

  useFocusEffect(
    useCallback(() => {
      connectSocket();
      return () => {
        if (socket && socket?.connected) {
          socket.disconnect();
        }
      };
    }, []),
  );

  return (
    <Container>
      <Header title={'Networking'} rightIcon={null} />
      {!allUsers ? (
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
            text={`${allUsers?.length} Users Registered`}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <SizedBox height={SIZES.padding2} />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={search ? searchArray(allUsers, search) : allUsers}
            keyExtractor={item => item?._id}
            renderItem={({ item }) => <SingleUserView item={item} />}
            ListFooterComponent={<SizedBox />}
            ListEmptyComponent={<ListEmptyText text={'No Network Found'} />}
          />
        </View>
      )}
    </Container>
  );
};

export default Networking;

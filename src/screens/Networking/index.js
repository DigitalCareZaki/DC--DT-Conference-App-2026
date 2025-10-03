import React, { useCallback } from 'react';
import {
  Container,
  Header,
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
  const { auth_loading, all_users, dispatch } = NetworkFunctional();

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllUsers());
    }, []),
  );
  return (
    <Container>
      <Header title={'Networking'} rightIcon={null} />
      {auth_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <SearchBar style={styles.search_bar} placeholder={'Search..'} />

          <Text
            text={`${all_users?.length} Users Registered`}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={all_users}
            ListFooterComponent={<SizedBox />}
            keyExtractor={item => item?.id}
            renderItem={({ item }) => <SingleUserView item={item} />}
          />
        </View>
      )}
    </Container>
  );
};

export default Networking;

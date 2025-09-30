import React from 'react';
import {
  Container,
  Header,
  SearchBar,
  SizedBox,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { SIZES } from '../../constants';
import { registered_users, TextWeights } from '../../config';
import { SingleUserView } from "./components"

const Networking = () => {

  return (
    <Container>

      <Header title={'Networking'} rightIcon={null} />

      <View style={styles.main_view}>

        <SearchBar
          style={styles.search_bar}
          placeholder={'Search..'}
        />

        <Text
          text={'6 Users Registered'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          data={registered_users}
          ListFooterComponent={<SizedBox />}
          keyExtractor={item => item?.id}
          renderItem={({ item }) => <SingleUserView item={item} />}
        />
      </View>
    </Container>
  );
};

export default Networking;

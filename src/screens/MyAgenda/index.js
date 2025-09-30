import React from 'react';
import {
  Cards,
  Container,
  Header,
  SizedBox,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { agenda_array } from '../../config';

const MyAgenda = () => {

  return (
    <Container>

      <Header title={'My Agenda'} rightIcon={null} />

      <View style={styles.main_view}>

        <FlatList
          data={agenda_array}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<SizedBox />}
          renderItem={({ item }) => <Cards isDetail={true} item={item} isFavourite={true} />}
        />

      </View>
    </Container>
  );
};

export default MyAgenda;

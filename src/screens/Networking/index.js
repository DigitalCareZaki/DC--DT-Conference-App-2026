import React from 'react';
import {
  Button,
  Container,
  Header,
  RowView,
  SearchBar,
  Text,
} from '../../components';
import { FlatList, View } from 'react-native';
import { styles } from './index.styles';
import { COLORS, SIZES } from '../../constants';
import { registeredUsers, TextWeights } from '../../config';
import { chat_icon } from '../../assets/icons';

const Networking = () => {
  const renderItem = ({ item }) => (
    <RowView justifyContent={'space-between'} style={styles.grid}>
      <View>
        <Text
          text={item.name}
          color={COLORS.white}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
        <Text
          text={item.email}
          color={COLORS.white}
          size={SIZES.h14}
          mt={SIZES.padding2}
        />
      </View>
      <Button style={styles.btn} buttonText={'Chat'} leftIcon={chat_icon} />
    </RowView>
  );

  return (
    <Container>
      <Header title={'Networking'} color={COLORS.white} />

      <View style={styles.main_view}>
        <SearchBar
          style={styles.search_bar}
          placeholder={'Search..'}
          editable={false}
          isRight
          isLeft={false}
        />

        <Text
          text={'6 Users Registered'}
          color={COLORS.white}
          size={SIZES.h18}
          weight={TextWeights.medium}
        />

        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          data={registeredUsers}
          contentContainerStyle={styles.gap}
          style={styles.flatlist}
        />
      </View>
    </Container>
  );
};

export default Networking;

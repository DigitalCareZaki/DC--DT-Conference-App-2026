import { View, FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import { SIZES } from '../../constants';
import { conferences, TextWeights } from '../../config';
import { Cards, Header, SizedBox, Text } from '../../components';
import { styles } from "./index.styles"
import { navigate } from '../../navigation/service';

const Conference = () => {

  return (
    <Container>

      <Header isMenu title={"Conferences"} />

      <View style={styles.main_view} >

        <Text
          text={'3 Conferences Available'}
          size={SIZES.h16}
          weight={TextWeights.medium}
          mt={SIZES.padding2}
        />

        <SizedBox height={SIZES.padding2} />

        <FlatList
          data={conferences}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<SizedBox />}
          renderItem={({ item }) => (
            <Cards
              item={item}
              onPressHeart={() => { }}
              onPress={() => navigate("ConferenceDetails")}
            />
          )}
        />

      </View>

    </Container>
  );
};

export default Conference;



import { FlatList, View } from 'react-native';
import React from 'react';
import { Cards, Container, Header, SizedBox } from '../../components';
import { conferences } from '../../config';
import { navigate } from '../../navigation/service';
import { styles } from "./index.styles"

const WorkSop = () => {
  return (
    <Container>
      <Header title={"Workshop"} rightIcon={null} />

      <View style={styles.main_view} >

        <FlatList
          data={conferences}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Cards
              item={item}
              onPressHeart={() => { }}
              onPress={() => navigate("WorkShopDetails")}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<SizedBox />}
        />

      </View>

    </Container>
  );
};

export default WorkSop;
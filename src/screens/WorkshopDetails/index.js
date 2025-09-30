import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import { Button, Cards, Container, Header, SizedBox, Text } from '../../components';
import ShopModules from './components/ShopModules';
import { conferences, shop_modules, TextWeights } from '../../config';
import { COLORS, SIZES } from '../../constants';
import { styles } from "./index.styles"

const WorkshopDetails = () => {

  return (
    <Container>

      <Header title={"Workshop Detail"} rightIcon={null} />

      <View style={styles.main_view} >

        <ScrollView showsVerticalScrollIndicator={false} >

          <Cards isDetail={true} item={conferences?.[0]} />

          <Text
            mt={SIZES.padding2}
            text={'Workshop Modules'}
            size={SIZES.h16}
            weight={TextWeights.medium}
          />

          <FlatList
            data={shop_modules}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => <ShopModules item={item} />}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<SizedBox />}
          />


        </ScrollView>

        <SizedBox height={SIZES.padding2} />

        <Button
          buttonText={'Download Materials'}
          color={COLORS.white}
          style={styles.transparent_btn}
        />

        <Button buttonText={'Register Online'} style={styles.btn} />

        <Button
          buttonText={'Ask Workshop Leader'}
          color={COLORS.white}
          style={styles.transparent_btn}
        />

        <SizedBox height={SIZES.padding2} />

      </View>
    </Container>
  );
};

export default WorkshopDetails;

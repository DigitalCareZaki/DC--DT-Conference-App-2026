import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Container, SizedBox } from '../../components';
import Card from './components/Card';
import ShopModules from './components/ShopModules';
import { shop_modules, TextWeights } from '../../config';
import { COLORS, SIZES } from '../../constants';
import CustomText from '../../components/Text';
import { common_styles } from '../../utils/common_styles';
const WorkshopDetails = () => {
  return (
    <Container>
      <SizedBox />
      <Card />
      <SizedBox />
          <View style={common_styles.heading}>
        <CustomText
          text={'Workshop Modules'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
      </View>
       <SizedBox height={SIZES.h13}/>
      <FlatList
        data={shop_modules}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ShopModules
            title={item.title}
            time={item.time}
            description={item.description}
          />
        )}
        contentContainerStyle={{ paddingBottom: SIZES.padding * 1 }}
        ItemSeparatorComponent={() => <SizedBox height={SIZES.h13} />}
        showsVerticalScrollIndicator={false}
      />
      <SizedBox />
      <View style={{ paddingHorizontal: SIZES.padding2 }}>
        <Button
          buttonText={'Download Materials'}
          textStyle={{ color: COLORS.white }}
          bgColor="transparent"
        />
        <SizedBox />
        <Button buttonText={'Register Online'} />
        <SizedBox />
        <Button
          buttonText={'Ask Workshop Leader'}
          textStyle={{ color: COLORS.white }}
          bgColor="transparent"
        />
      </View>
        <SizedBox />
    </Container>
  );
};

export default WorkshopDetails;

const styles = StyleSheet.create({});

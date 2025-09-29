import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Cards, Container, SizedBox, Text } from '../../components';
import ShopModules from './components/ShopModules';
import { shop_modules, TextWeights } from '../../config';
import { COLORS, SIZES } from '../../constants';
import { common_styles } from '../../utils/common_styles';
const WorkshopDetails = () => {
  return (
    <Container>
      <ScrollView>
      <SizedBox />
      <Cards
      title={'Cybersecurity Best Practices Workshop'}
      subtitle={'Hands-on workshop covering modern cybersecurity practices.'}
      date={'Wednesday, June 18, 2025'}
      time={'3:00 PM - 9:00 PM'}
      venue={'Workshop Room 1'}
      />
      <SizedBox />
          <View style={common_styles.heading}>
        <Text
          text={'Workshop Modules'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
      </View>
       <SizedBox height={SIZES.h13}/>
      <FlatList
        data={shop_modules}
        keyExtractor={item => item.id}
        scrollEnabled={false}
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
       </ScrollView>
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

import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import { SIZES } from '../../constants';
import { conferences, TextWeights } from '../../config';
import { common_styles } from '../../utils/common_styles';
import { Cards, SizedBox, Text } from '../../components';

const Conference = () => {
  
  
  return (
    <Container>
      <SizedBox />

      {/* Heading */}
      <View style={common_styles.heading}>
        <Text
          text={'3 Conferences Available'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
      </View>

      <SizedBox height={SIZES.padding2} />

      {/* FlatList */}
      <FlatList
        data={conferences}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Cards
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            time={item.time}
            venue={item.venue}
            onPressHeart={() => console.log('Heart pressed: ', item.id)}
            onPressForward={() => console.log('Forward pressed: ', item.id)}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: SIZES.padding2 }} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  );
};

export default Conference;



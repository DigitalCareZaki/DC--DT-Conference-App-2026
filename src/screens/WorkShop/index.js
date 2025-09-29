import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { Cards, Container, SizedBox } from '../../components';

import { SIZES } from '../../constants';

import { conferences, TextWeights } from '../../config';

const WorkSop = () => {
  return (
    <Container>
      <SizedBox />

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

export default WorkSop;

const styles = StyleSheet.create({});

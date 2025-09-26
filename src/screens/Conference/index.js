import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import CustomText from '../../components/Text';
import SizedBox from '../../components/SizedBox';
import {styles} from './index.styles'
import { SIZES } from '../../constants';
import { conferences, TextWeights } from '../../config';
import Cards from './components/Cards';

const Conference = () => {
  
  
  return (
    <Container>
      <SizedBox />

      {/* Heading */}
      <View style={styles.heading}>
        <CustomText
          text={'3: Conferences Available'}
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



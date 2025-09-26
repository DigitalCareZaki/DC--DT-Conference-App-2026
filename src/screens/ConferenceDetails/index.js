import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Button, Container, SizedBox } from '../../components';
import Card from './components/card';
import CustomText from '../../components/Text';
import { COLORS, SIZES } from '../../constants';
import { sessions, TextWeights } from '../../config';
import SessionCard from './components/SessionCard'
import {styles} from './index.styles'

const ConferenceDetails = () => {
  

  return (
    <Container >
        
      <SizedBox />
      <Card />
      <SizedBox />

      {/* Heading */}
      <View style={styles.heading}>
        <CustomText
          text={'Program Sessions'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
      </View>

      <SizedBox />

      {/* FlatList with SessionCard */}
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SessionCard
            title={item.title}
            time={item.time}
            speaker={item.speaker}
            description={item.description}
          />
        )}
        contentContainerStyle={{ paddingBottom: SIZES.padding * 2 }}
        ItemSeparatorComponent={() => <SizedBox />}
        showsVerticalScrollIndicator={false}
      />

      {/* Buttons */}
      <View style={{ paddingHorizontal: SIZES.padding2 }}>
        <Button buttonText={'Register Online'} />
        <SizedBox />
        <Button
          buttonText={'Download Brochure'}
          textStyle={{ color: COLORS.white }}
          bgColor="transparent"
        />
      </View>
    </Container>
  );
};

export default ConferenceDetails;



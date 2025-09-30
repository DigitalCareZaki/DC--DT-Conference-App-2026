import {  View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Button, Cards, Container, SizedBox, Text } from '../../components';
import { COLORS, SIZES } from '../../constants';
import { sessions, TextWeights } from '../../config';
import SessionCard from './components/SessionCard'
import {styles} from './index.styles'

const ConferenceDetails = () => {
  

  return (
    <Container >
        <ScrollView>
      <SizedBox />
      <Cards
        title={'Future of Technology 2025'}
        subtitle={'Exploring the latest trends and innovations in technology.'}
        date={'Sunday, June 15, 2025 -  June 17, 2025'}
        time={'Time: 2:00 PM - 11:00 PM'}
        venue={'Venue: Convention Center, Hall A'}
      />
    <SizedBox height={SIZES.h15}/>


      {/* Heading */}
      <View style={styles.heading}>
        <Text
          text={'Program Sessions'}
          size={SIZES.h16}
          weight={TextWeights.medium}
        />
      </View>

        <SizedBox height={SIZES.h15}/>

      {/* FlatList with SessionCard */}
      <FlatList
        data={sessions}
        scrollEnabled={false}
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
      </ScrollView>

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
      <SizedBox height={SIZES.height*0.04}/>
    </Container>
  );
};

export default ConferenceDetails;



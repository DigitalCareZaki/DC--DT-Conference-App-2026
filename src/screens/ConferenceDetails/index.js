import { View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { Button, Cards, Container, Header, SizedBox, Text } from '../../components';
import { COLORS, SIZES } from '../../constants';
import { conferences, sessions, TextWeights } from '../../config';
import SessionCard from './components/SessionCard'
import { styles } from './index.styles'

const ConferenceDetails = () => {

  return (
    <Container >

      <Header title={"Conference Detail"} rightIcon={null} />

      <View style={styles.main_view} >

        <ScrollView showsVerticalScrollIndicator={false} >

          <Cards isDetail={true} item={conferences?.[0]} />

          <Text
            text={'Program Sessions'}
            size={SIZES.h16}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />


          <FlatList
            data={sessions}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            ListFooterComponent={<SizedBox />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SessionCard item={item} />}
          />
        </ScrollView>

        <SizedBox height={SIZES.padding2} />
        <Button buttonText={'Register Online'} />

        <Button
          style={styles.download_btn}
          buttonText={'Download Brochure'}
          color={COLORS.white}
        />
      </View>
    </Container>
  );
};

export default ConferenceDetails;



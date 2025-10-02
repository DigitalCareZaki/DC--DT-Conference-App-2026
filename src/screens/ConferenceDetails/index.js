import { View, FlatList, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import { COLORS, SIZES } from '../../constants';
import { conferences, sessions, TextWeights } from '../../config';
import SessionCard from './components/SessionCard';
import { styles } from './index.styles';
import ConferenceFunctional from './index.function';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getConferencesById } from '../../redux/actions/main-action';

const ConferenceDetails = ({ route }) => {
  const { id } = route?.params;
  const { main_loading, single_conference } = ConferenceFunctional();

  const dispatch = useDispatch();
  console.log('single_conference', single_conference);
  useFocusEffect(
    useCallback(() => {
      dispatch(getConferencesById(id));
    }, []),
  );
  return (
    <Container>
      <Header title={'Conference Detail'} rightIcon={null} />

      {main_loading ? (
        <LoaderModal />
      ) : (
        <View style={styles.main_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Cards isDetail={true} item={single_conference} />

            <Text
              text={'Program Sessions'}
              size={SIZES.h16}
              weight={TextWeights.medium}
              mt={SIZES.padding2}
            />

            <FlatList
              data={single_conference?.sessions}
              scrollEnabled={false}
              keyExtractor={item => item.id}
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
      )}
    </Container>
  );
};

export default ConferenceDetails;

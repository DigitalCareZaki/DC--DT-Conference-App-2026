import { View, FlatList, ScrollView } from 'react-native';
import React from 'react';
import {
  Button,
  Cards,
  Container,
  Header,
  Loader,
  LoaderModal,
  SizedBox,
  Text,
} from '../../components';
import { COLORS, SIZES } from '../../constants';
import { TextWeights } from '../../config';
import SessionCard from './components/SessionCard';
import { styles } from './index.styles';
import ConferenceFunctional from './index.function';
import { useIsFocused } from '@react-navigation/native';

const ConferenceDetails = ({ route }) => {
  const id = route?.params?.id;
  const isFocused = useIsFocused();
  const {
    detail_loading,
    conference_detail,
    onPressHeart,
    onPressRegister,
    saveImage,
  } = ConferenceFunctional({ id });

  return (
    <Container>
      <Header title={'Session Detail'} rightIcon={null} />
      {detail_loading && isFocused ? (
        <Loader />
      ) : (
        <View style={styles.main_view}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Cards
              isDetail={true}
              item={conference_detail}
              onPressHeart={() => onPressHeart(conference_detail)}
            />

            {/* <Text
              text={'Program Sessions'}
              size={SIZES.h16}
              weight={TextWeights.medium}
              mt={SIZES.padding2}
            /> */}

            {/* <FlatList
              data={conference_detail?.sessions}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              ListFooterComponent={<SizedBox />}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <SessionCard item={item} />}
            /> */}
          </ScrollView>

          <SizedBox height={SIZES.padding2} />
          <Button buttonText={'Register Online'} onPress={onPressRegister} />

          <Button
            style={styles.download_btn}
            buttonText={'Download Brochure'}
            color={COLORS.white}
            onPress={() => saveImage(conference_detail?.brochure)}
          />
        </View>
      )}
    </Container>
  );
};

export default ConferenceDetails;

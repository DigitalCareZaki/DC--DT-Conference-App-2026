import {
  View,
  FlatList,
  ScrollView,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';
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
import { TextWeights } from '../../config';
import SessionCard from './components/SessionCard';
import { styles } from './index.styles';
import ConferenceFunctional from './index.function';
import { useIsFocused } from '@react-navigation/native';
import RNFetchBlob from 'rn-fetch-blob';

const ConferenceDetails = ({ route }) => {
  const id = route?.params?.id;
  const isFocused = useIsFocused();
  const { detail_loading, conference_detail, onPressHeart, onPressRegister } =
    ConferenceFunctional({ id });

  const downloadImg = async imageUrl => {
    console.log('imageUrl', imageUrl);
    RNFetchBlob.config({
      fileCache: true,
    })
      .fetch('GET', imageUrl, {})
      .then(res => {
        console.log('The file saved to ', res.path());
      });
  };

  // const saveImage = async imageUrl => {
  //   try {
  //     if (Platform.OS === 'android') {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'Storage Permission Required',
  //           message: 'App needs access to your storage to download images',
  //         },
  //       );
  //       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
  //         Alert.alert(
  //           'Permission Denied',
  //           'Cannot save image without permission',
  //         );
  //         return;
  //       }
  //     }
  //     RNFetchBlob.config({
  //       fileCache: true,
  //     })
  //       .fetch('GET', imageUrl, {})
  //       .then(res => {
  //         console.log('The file saved to ', res.path());
  //       });
  //   } catch (error) {
  //     console.error(error);
  //     Alert.alert('Error', 'Failed to save image.');
  //   }
  // };

  console.log('conference_detail', conference_detail);
  return (
    <Container>
      <Header title={'Conference Detail'} rightIcon={null} />
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Cards
            isDetail={true}
            item={conference_detail}
            onPressHeart={() => onPressHeart(conference_detail)}
          />

          <Text
            text={'Program Sessions'}
            size={SIZES.h16}
            weight={TextWeights.medium}
            mt={SIZES.padding2}
          />

          <FlatList
            data={conference_detail?.sessions}
            scrollEnabled={false}
            keyExtractor={item => item.id}
            ListFooterComponent={<SizedBox />}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <SessionCard item={item} />}
          />
        </ScrollView>

        <SizedBox height={SIZES.padding2} />
        <Button buttonText={'Register Online'} onPress={onPressRegister} />

        <Button
          style={styles.download_btn}
          buttonText={'Download Brochure'}
          color={COLORS.white}
          onPress={() => downloadImg(conference_detail?.brochure)}
        />

        <LoaderModal visible={detail_loading && isFocused} />
      </View>
    </Container>
  );
};

export default ConferenceDetails;

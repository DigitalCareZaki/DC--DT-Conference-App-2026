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

  /**
   * Request Android storage permission (required on Android 10 and below)
   */
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download images.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  /**
   * Downloads and saves image to the device gallery.
   */
  const saveImage = async imageUrl => {
    if (!imageUrl) {
      Alert.alert('Error', 'No image URL provided.');
      return;
    }

    try {
      // Handle permission for Android
      if (Platform.OS === 'android') {
        const hasPermission = await requestStoragePermission();
        if (!hasPermission) {
          Alert.alert('Permission Denied', 'Cannot save image without permission.');
          return;
        }
      }

      const { config, fs } = RNFetchBlob;
      const date = new Date();
      const ext = imageUrl.split('.').pop();
      const PictureDir =
        Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
      const filePath = `${PictureDir}/conference_brochure_${date.getTime()}.${ext}`;

      config({
        fileCache: true,
        appendExt: ext,
        path: filePath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: filePath,
          description: 'Downloading brochure...',
        },
      })
        .fetch('GET', imageUrl)
        .then(res => {
          console.log('File saved to:', res.path());
          if (Platform.OS === 'ios') {
            RNFetchBlob.fs.writeFile(res.path(), 'base64');
          }
          Alert.alert('Success', 'Brochure downloaded successfully.');
        })
        .catch(error => {
          console.error('Download error:', error);
          Alert.alert('Error', 'Failed to download brochure.');
        });
    } catch (error) {
      console.log('Save error:', error);
      Alert.alert('Error', 'Something went wrong while saving the image.');
    }
  };

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
          onPress={() => saveImage(conference_detail?.brochure)}
        />

        <LoaderModal visible={detail_loading && isFocused} />
      </View>
    </Container>
  );
};

export default ConferenceDetails;

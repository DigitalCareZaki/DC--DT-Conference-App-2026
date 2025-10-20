import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';
import { Linking, Alert, Platform, PermissionsAndroid } from 'react-native';
import { website_url } from '../../config';
import { url_regix } from '../../utils/functions';
import RNFetchBlob from 'rn-fetch-blob';

export default ({ id }) => {
  const dispatch = useDispatch();

  const { detail_loading, conference_detail } = useSelector(
    state => state.main,
  );
  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    dispatch(getConference(id));
  }, []);

  const onPressHeart = (item, index) => {
    if (!user) {
      navigate('Login');
      return;
    }
    dispatch(setSelectedItemIndex(index));

    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onPressRegister = () => {
    if (conference_detail?.url && url_regix.test(conference_detail?.url)) {
      const formattedLink = conference_detail?.url?.startsWith('http')
        ? conference_detail?.url
        : `https://${conference_detail?.url}`;

      Linking.openURL(formattedLink);
      return;
    }
  };

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
          Alert.alert(
            'Permission Denied',
            'Cannot save image without permission.',
          );
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

  return {
    detail_loading,
    conference_detail,
    onPressHeart,
    onPressRegister,
    saveImage,
  };
};

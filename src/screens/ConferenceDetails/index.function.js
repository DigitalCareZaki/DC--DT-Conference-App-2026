import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';
import { Linking, Alert, Platform } from 'react-native';
import { url_regix } from '../../utils/functions';
import RNFetchBlob from 'react-native-blob-util';

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

  const saveImage = async imageUrl => {
    if (!imageUrl) {
      Alert.alert('Error', 'No image URL provided.');
      return;
    }

    try {
      const { config, fs, android } = RNFetchBlob;
      const date = new Date();
      const ext = imageUrl.split('.').pop();
      const PictureDir =
        Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
      const filePath = `${PictureDir}/conference_brochure_${date.getTime()}.${ext}`;

      const options = {
        fileCache: true,
        appendExt: ext,
        path: filePath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: filePath,
          description: 'Downloading brochure...',
          title: 'Conference Brochure',
          mediaScannable: true,
        },
      };
      const res = await config(options).fetch('GET', imageUrl);

      // For Android 11+ ensure proper registration in MediaStore
      if (Platform.OS === 'android' && Platform.Version >= 29) {
        android.addCompleteDownload({
          title: 'Conference Brochure',
          description: 'Brochure downloaded successfully.',
          mime: 'application/pdf',
          path: res.path(),
          showNotification: true,
        });
      }
      Alert.alert('Success', 'Brochure downloaded successfully.');
    } catch (error) {
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

import { Alert, Linking, Platform } from 'react-native';
import { isIOS } from '../../constants/theme';
import { navigate } from '../../navigation/service';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav } from '../../redux/actions/main-action';
import { url_regix } from '../../utils/functions';
import { useState } from 'react';
import RNFetchBlob from 'react-native-blob-util';

export default item => {
  const dispatch = useDispatch();

  const { user } = useSelector(state => state.constant);

  const [showModal, setShowModal] = useState(false);

  const handleOpenMaps = () => {
    const latitude = 24.9019;
    const longitude = 67.0767;
    const label = 'Expo Centre Karachi Block 15';

    const url = isIOS
      ? `http://maps.apple.com/?ll=${latitude},${longitude}&q=${label}`
      : `geo:${latitude},${longitude}?q=${label}`;

    Linking.openURL(url).catch(err => {});
  };

  const onPressHeart = async () => {
    if (!user) {
      navigate('Login');
      return;
    }

    const apiData = {
      favoriteId: item?._id,
      type: 'exhibition',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onPressLink = () => {
    if (item?.contactLink && url_regix.test(item?.contactLink)) {
      const formattedLink = item?.contactLink?.startsWith('http')
        ? item?.contactLink
        : `https://${item?.contactLink}`;

      Linking.openURL(formattedLink);
      return;
    }
  };

  const onPressDownload = async url => {
    try {
      const { config, fs, android } = RNFetchBlob;
      const date = new Date();

      // Extract file extension from URL or default to jpg
      const extensionMatch = url?.match(/\.(jpg|jpeg|png|webp|gif)$/i);
      const ext = extensionMatch ? extensionMatch[1] : 'jpg';
      const fileName = `image_${date.getTime()}.${ext}`;

      // Define storage directory
      const dirs = fs.dirs;
      const downloadPath =
        Platform.OS === 'ios'
          ? `${dirs.DocumentDir}/${fileName}`
          : `${dirs.DownloadDir}/${fileName}`;

      // Set MIME type dynamically
      const mimeType = `image/${ext === 'jpg' ? 'jpeg' : ext}`;

      // Configure RNFetchBlob download
      const options = {
        fileCache: true,
        appendExt: ext,
        path: downloadPath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mime: mimeType,
          path: downloadPath,
          description: 'Downloading image...',
          title: fileName,
          mediaScannable: true,
        },
      };

      // Initiate download
      const res = await config(options).fetch('GET', url);

      // For Android 11+ ensure proper registration in MediaStore
      if (Platform.OS === 'android' && Platform.Version >= 29) {
        android.addCompleteDownload({
          title: fileName,
          description: 'Image downloaded successfully.',
          mime: mimeType,
          path: res.path(),
        });
      }

      Alert.alert('Success', 'Image downloaded successfully.');
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download image.');
    }
  };

  return {
    handleOpenMaps,
    onPressHeart,
    onPressLink,
    showModal,
    setShowModal,
    onPressDownload,
  };
};

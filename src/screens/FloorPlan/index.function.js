import { useState } from 'react';
import { Image } from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { useDispatch } from 'react-redux';
import { setToastData } from '../../redux/slices/auth-slice';

export default () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [hallImg, setHallImg] = useState('');

  const onPressDownload = async localImg => {
    try {
      const assetUri = Image.resolveAssetSource(localImg).uri;
      const { config, android } = RNFetchBlob;
      const date = new Date();

      const fileName = `image_${date.getTime()}.png`;

      const downloadPath = `${RNFetchBlob.fs.dirs.DownloadDir}/${fileName}`;

      const options = {
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mime: 'image/png',
          path: downloadPath,
          title: fileName,
          description: 'Downloading image...',
          mediaScannable: true,
        },
      };

      await config(options).fetch('GET', assetUri);

      setTimeout(() => {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'Image downloaded successfully!',
            is_error: false,
          }),
        );
      }, 500);
    } catch (error) {
      setTimeout(() => {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'Failed to download image.',
            is_error: true,
          }),
        );
      }, 500);
    }
  };

  return {
    setShowModal,
    showModal,
    setHallImg,
    hallImg,
    onPressDownload,
  };
};

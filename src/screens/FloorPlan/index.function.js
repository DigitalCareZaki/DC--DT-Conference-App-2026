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
      const date = new Date();
      const fileName = `image_${date.getTime()}.png`;

      const options = {
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mime: 'image/png',
          description: 'Downloading image...',
          title: fileName,
          mediaScannable: true,
        },
      };

      await RNFetchBlob.config(options).fetch('GET', assetUri);

      dispatch(
        setToastData({
          show_toast_modal: true,
          toast_description: 'Image downloaded successfully!',
          is_error: false,
        }),
      );
    } catch (error) {
      dispatch(
        setToastData({
          show_toast_modal: true,
          toast_description: 'Failed to download image.',
          is_error: true,
        }),
      );
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

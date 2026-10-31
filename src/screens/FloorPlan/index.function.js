import { useState } from 'react';
import { Image, Platform } from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { useDispatch } from 'react-redux';
import { setToastData } from '../../redux/slices/auth-slice';

export default () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [hallImg, setHallImg] = useState(null);

  const onPressDownload = async source => {
    try {
      const { config, fs, android } = RNFetchBlob;
      const date = new Date();

      // `source` is a local image (require() => number) or a remote url string
      const url =
        typeof source === 'string' ? source : Image.resolveAssetSource(source)?.uri;
      if (!url) {
        throw new Error('Invalid image source');
      }

      // Extract file extension from URL or default to png
      const extensionMatch = url.match(/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i);
      const ext = extensionMatch ? extensionMatch[1] : 'png';
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

      let savedPath = downloadPath;
      if (/^https?:\/\//i.test(url)) {
        // Dev build (metro server) or remote url: download
        const res = await config(options).fetch('GET', url);
        savedPath = res.path();
      } else if (Platform.OS === 'ios') {
        // Release iOS: bundled asset is a local file path
        await fs.cp(url.replace(/^file:\/\//, ''), downloadPath);
      } else {
        // Release Android: bundled asset is a drawable resource name
        const base64 = await fs.readFile(
          `/android_res/drawable/${url}.${ext}`,
          'base64',
        );
        await fs.writeFile(downloadPath, base64, 'base64');
      }

      // For Android 10+ ensure proper registration in MediaStore
      if (Platform.OS === 'android' && Platform.Version >= 29) {
        android.addCompleteDownload({
          title: fileName,
          description: 'Image downloaded successfully.',
          mime: mimeType,
          path: savedPath,
        });
      }
      setShowModal(false);

      setTimeout(() => {
        dispatch(
          setToastData({
            show_toast_modal: true,
            toast_description: 'Image downloaded successfully!',
            is_error: false,
          }),
        );
      }, 300);
    } catch (error) {
      console.error('Download error:', error);
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

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExhibition } from '../../redux/actions/main-action';
import { setListLoading } from '../../redux/slices/main-slice';
import { Alert, PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export default () => {
  const { list_loading, exhibition } = useSelector(state => state.main);
  const { total_item } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [refeshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState(null);

  const getExhibitionData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };
    dispatch(getExhibition(payload, exhibition, hasMore => setIsMore(hasMore)));
  };

  useEffect(() => {
    dispatch(setListLoading(true));
    getExhibitionData(1);
  }, []);

  const onEndReached = () => {
    // if (list_loading) return;
    // if (isMore && exhibition?.length > 0) {
    //   setPage(page + 1);
    //   getExhibitionData(page + 1);
    // }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getExhibitionData(1);
    setRefreshing(false);
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
  const savePdf = async () => {
    
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
      const ext = 'pdf';
      const PictureDir =
        Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
      const filePath = `${PictureDir}/exhibitor_list_${date.getTime()}.${ext}`;

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
        .fetch('GET', 'http://51.83.237.63:5041/uploads/1760964790660-55834903.pdf')
        .then(res => {
          if (Platform.OS === 'ios') {
            RNFetchBlob.fs.writeFile(res.path(), 'base64');
          }
          Alert.alert('Success', 'Brochure downloaded successfully.');
        })
        .catch(error => {
          Alert.alert('Error', 'Failed to download brochure.');
        });
    } catch (error) {
      Alert.alert('Error', 'Something went wrong while saving the image.');
    }
  };

  return {
    exhibition,
    onEndReached,
    total_item,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
    search,
    setSearch,
    savePdf,
  };
};

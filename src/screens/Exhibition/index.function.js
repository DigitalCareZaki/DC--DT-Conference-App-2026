import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getExhibition } from '../../redux/actions/main-action';
import {
  setListLoading,
  setSelectedItemIndex,
} from '../../redux/slices/main-slice';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import RNFetchBlob from 'react-native-blob-util';
import { navigate } from '../../navigation/service';

export default () => {
  const { list_loading, exhibition } = useSelector(state => state.main);
  const { total_item } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.constant);

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
    if (list_loading) return;
    if (isMore && exhibition?.length > 0) {
      setPage(page + 1);
      getExhibitionData(page + 1);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getExhibitionData(1);
    setRefreshing(false);
  };

  const savePdf = async () => {
    try {
      const { config, fs, android } = RNFetchBlob;
      const date = new Date();
      const ext = 'pdf';
      const fileName = `exhibitor_list_${date.getTime()}.${ext}`;
      const downloadUrl =
        'http://51.83.237.63:5051/uploads/1760973291595-706686920.pdf';

      // Define storage directory
      const dirs = fs.dirs;
      const downloadPath =
        Platform.OS === 'ios'
          ? `${dirs.DocumentDir}/${fileName}`
          : `${dirs.DownloadDir}/${fileName}`;

      // Configure RNFetchBlob download
      const options = {
        fileCache: true,
        appendExt: ext,
        path: downloadPath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          mime: 'application/pdf',
          path: downloadPath,
          description: 'Downloading brochure...',
          title: fileName,
          mediaScannable: true,
        },
      };

      // Initiate download
      const res = await config(options).fetch('GET', downloadUrl);

      // For Android 11+ ensure proper registration in MediaStore
      if (Platform.OS === 'android' && Platform.Version >= 29) {
        android.addCompleteDownload({
          title: fileName,
          description: 'Brochure downloaded successfully.',
          mime: 'application/pdf',
          path: res.path(),
          showNotification: true,
        });
      }

      Alert.alert('Success', 'Exhibitor List downloaded successfully.');
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to download brochure.');
    }
  };

  const onPressHeart = async (item, index) => {
    if (!user) {
      navigate('Login');
      return;
    }
    dispatch(setSelectedItemIndex(index));

    const apiData = {
      favoriteId: item?._id,
      type: 'exhibition',
    };
    dispatch(addRemoveFav(apiData));
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
    onPressHeart,
    total_item,
  };
};

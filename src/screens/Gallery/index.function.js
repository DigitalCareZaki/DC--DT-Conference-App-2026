import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGallery } from '../../redux/actions/main-action';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, gallery } = useSelector(state => state.main);

  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onPressImage = index => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const getGalleryData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };
    dispatch(
      getGallery(payload, gallery, hasMore => {
        setHasMore(hasMore);
      }),
    );
  };
  useEffect(() => {
    dispatch(setListLoading(true));
    getGalleryData(1);
  }, []);

  const onEndReached = () => {
    if (list_loading) return;

    if (hasMore && gallery?.length > 0) {
      setPage(page + 1);
      getGalleryData(page + 1);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(false);
    await getGallery(1);
    setRefreshing(false);
  };

  return {
    showModal,
    selectedIndex,
    onPressImage,
    gallery,
    setShowModal,
    page,
    setPage,
    hasMore,
    setHasMore,
    onEndReached,
    list_loading,
    refreshing,
    onRefresh,
  };
};

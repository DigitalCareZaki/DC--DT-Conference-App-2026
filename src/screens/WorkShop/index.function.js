import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getWorkshops } from '../../redux/actions/main-action';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, workshops } = useSelector(state => state.main);

  const { user } = useSelector(state => state.constant);
  const [isMore, setIsMore] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingItemId, setLoadingItemId] = useState('');

  const getWorkShopData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };

    dispatch(
      getWorkshops(payload, workshops, isMore => {
        setIsMore(isMore);
      }),
    );
  };

  useEffect(() => {
    dispatch(setListLoading(true));
    getWorkShopData(page);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getWorkShopData(1);
    setRefreshing(false);
  };

  const onPressHeart = async item => {
    if (!user) {
      navigate('Login');
      return;
    }
    setLoadingItemId(item?._id);

    const apiData = {
      favoriteId: item?._id,
      type: 'workshop',
    };

    try {
      await dispatch(addRemoveFav(apiData));
    } finally {
      setLoadingItemId(null);
    }
  };

  const onEndReached = () => {
    if (list_loading) return;

    if (isMore && workshops?.length > 0) {
      setPage(page + 1);
      getWorkShopData(page + 1);
    }
  };

  return {
    workshops,
    onPressHeart,
    onEndReached,
    isMore,
    setIsMore,
    setRefreshing,
    list_loading,
    onRefresh,
    refreshing,
    loadingItemId,
  };
};

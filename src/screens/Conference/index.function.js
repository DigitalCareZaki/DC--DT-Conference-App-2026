import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConferences } from '../../redux/actions/main-action';
import { useCallback, useEffect, useState } from 'react';
import { navigate } from '../../navigation/service';
import {
  setListLoading,
  setSelectedItemIndex,
} from '../../redux/slices/main-slice';
import { useFocusEffect } from '@react-navigation/native';

export default () => {
  const dispatch = useDispatch();

  const { main_loading, list_loading, conferences, favourites } = useSelector(
    state => state.main,
  );
  const { total_item } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.constant);

  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [loadingItemId, setLoadingItemId] = useState('');

  const getConferenceData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };

    dispatch(
      getConferences(payload, conferences, isMore => {
        setIsMore(isMore);
      }),
    );
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(setListLoading(true));
      getConferenceData(page);
    }, []),
  );

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getConferenceData(1);
    setRefreshing(false);
  };

  const onPressHeart = async (item, index) => {
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

  const onEndReached = () => {
    if (list_loading) return;

    if (isMore && conferences?.length > 0) {
      setPage(page + 1);
      getConferenceData(page + 1);
    }
  };

  return {
    list_loading,
    conferences,
    onPressHeart,
    onEndReached,
    total_item,
    favourites,
    isMore,
    onRefresh,
    refreshing,
    main_loading,
    loadingItemId,
  };
};

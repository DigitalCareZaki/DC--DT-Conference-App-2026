import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConferences } from '../../redux/actions/main-action';
import { useEffect, useState } from 'react';
import { navigate } from '../../navigation/service';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, conferences, favourites } = useSelector(state => state.main);
  const { user, total_item } = useSelector(state => state.auth);

  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getConferenceData = (pageNumber) => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };

    dispatch(getConferences(payload, conferences, isMore => { setIsMore(isMore) }));
  }

  useEffect(() => {
    dispatch(setListLoading(true))
    getConferenceData(page)
  }, [])


  const onRefresh = async () => {
    setRefreshing(true)
    setPage(1)
    setIsMore(false)
    await getConferenceData(1)
    setRefreshing(false)
  }

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }

    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onEndReached = () => {
    if (list_loading) return;

    if (isMore && conferences.length > 0) {
      setPage(page + 1)
      getConferenceData(page + 1)
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
    refreshing
  };
};

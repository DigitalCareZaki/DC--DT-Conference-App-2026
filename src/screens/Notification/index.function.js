import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthLoading } from '../../redux/slices/auth-slice';
import { setListLoading } from '../../redux/slices/main-slice';
import { getNotifications } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { list_loading, notifications } = useSelector(state => state.main);

  const getNotificationData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };
    dispatch(
      getNotifications(payload, notifications, isMore => {
        setIsMore(isMore);
      }),
    );
  };
  useEffect(() => {
    dispatch(setListLoading(true));
    getNotificationData(page);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getNotificationData(1);
    setRefreshing(false);
  };

  const onEndReached = () => {
    if (list_loading) return;

    if (isMore && notifications?.length > 0) {
      setPage(page + 1);
      getNotificationData(page + 1);
    }
  };
  return {
    onRefresh,
    onEndReached,
    refreshing,
    notifications,
    isMore,
    list_loading,
  };
};

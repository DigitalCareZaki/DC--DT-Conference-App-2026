import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions/auth-action';
import { setAuthLoading } from '../../redux/slices/auth-slice';

export default () => {
  const dispatch = useDispatch();

  const { auth_loading, all_users, total_item } = useSelector(
    state => state.auth,
  );

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [search, setSearch] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const getNetworks = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };
    dispatch(
      getAllUsers(payload, all_users, hasMore => {
        setHasMore(hasMore);
      }),
    );
  };

  useEffect(() => {
    dispatch(setAuthLoading(true));
    getNetworks(1);
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(false);
    await getNetworks(1);
    setRefreshing(false);
  };

  const onEndReached = () => {
    if (auth_loading) return;

    if (hasMore && all_users?.length > 0) {
      setPage(page + 1);
      getNetworks(page + 1);
    }
  };

  return {
    dispatch,
    all_users,
    page,
    hasMore,
    setHasMore,
    onEndReached,
    total_item,
    search,
    setSearch,
    auth_loading,
    refreshing,
    onRefresh,
  };
};

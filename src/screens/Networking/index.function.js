import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions/auth-action';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { all_users, total_item } = useSelector(state => state.auth);
  const { list_loading } = useSelector(state => state.main);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    dispatch(setListLoading(true));
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
    if (list_loading) return;

    if (hasMore && all_users?.length > 0) {
      setPage(page + 1);
      getNetworks(1);
    }
  };

  return {
    dispatch,
    all_users,
    page,
    hasMore,
    setHasMore,
    onEndReached,
    isLoading,
    total_item,
    search,
    setSearch,
    list_loading,
    refreshing,
    onRefresh,
  };
};

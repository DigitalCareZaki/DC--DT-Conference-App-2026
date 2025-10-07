import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';
import { useState } from 'react';
import { getAllUsers } from '../../redux/actions/auth-action';

export default () => {
  const { auth_loading, all_users, total_item } = useSelector(
    state => state.auth,
  );

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState(null);

  const dispatch = useDispatch();

  const onEndReached = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);

    const nextPage = page + 1;
    if (hasMore && all_users?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getAllUsers(payload, all_users, hasMore => {
          setHasMore(hasMore);
          setPage(nextPage);
          setIsLoading(false);
        }),
      );
    } else {
      setIsLoading(false);
    }
  };

  return {
    dispatch,
    auth_loading,
    all_users,
    page,
    hasMore,
    setHasMore,
    onEndReached,
    isLoading,
    total_item,
    search,
    setSearch
  };
};

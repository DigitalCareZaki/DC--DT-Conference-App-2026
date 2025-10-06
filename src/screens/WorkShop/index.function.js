import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getWorkshops } from '../../redux/actions/main-action';
import { useState } from 'react';

export default () => {
  const { main_loading, workshops } = useSelector(state => state.main);
  const { user } = useSelector(state => state.auth);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
    const apiData = {
      favoriteId: item?._id,
      type: 'workshop',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onEndReached = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const nextPage = page + 1;
    if (hasMore && workshops?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getWorkshops(payload, workshops, hasMore => {
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
    main_loading,
    workshops,
    dispatch,
    onPressHeart,
    page,
    setPage,
    hasMore,
    setHasMore,
    onEndReached,
    isLoading,
    setIsLoading,
  };
};

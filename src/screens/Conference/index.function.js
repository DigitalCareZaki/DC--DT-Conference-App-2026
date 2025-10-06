import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConferences } from '../../redux/actions/main-action';
import { useState } from 'react';
import { navigate } from '../../navigation/service';

export default () => {
  const { main_loading, conferences } = useSelector(state => state.main);
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
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };

  const onEndReached = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const nextPage = page + 1;
    if (hasMore && conferences?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getConferences(payload, conferences, hasMore => {
          setHasMore(hasMore);
          setPage(nextPage);
          setIsLoading(false);
        }),
      );
    } else {
      setIsLoading(true);
    }
  };
  return {
    main_loading,
    conferences,
    onPressHeart,
    dispatch,
    page,
    setPage,
    hasMore,
    setHasMore,
    onEndReached,
    isLoading,
  };
};

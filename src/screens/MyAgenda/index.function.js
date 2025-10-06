import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';
import { useState } from 'react';

export default () => {
  const { main_loading, favourites } = useSelector(state => state.main);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onPressHeart = item => {
    const apiData = {
      favoriteId: item?.favoriteId?._id,
      type: item?.type,
    };
    dispatch(
      addRemoveFav(apiData, () => {
        dispatch(getFavourites());
      }),
    );
  };

  const onEndReached = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const nextPage = page + 1;
    if (hasMore && favourites?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getFavourites(payload, favourites, hasMore => {
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
    favourites,
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

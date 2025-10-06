import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExhibition } from '../../redux/actions/main-action';

export default () => {
  const { main_loading, exhibition } = useSelector(state => state.main);
  const { total_item } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onEndReached = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const nextPage = page + 1;
    if (hasMore && exhibition?.length > 0) {
      const payload = {
        limit: 10,
        page: nextPage,
      };
      dispatch(
        getExhibition(payload, exhibition, hasMore => {
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
    exhibition,
    onEndReached,
    page,
    setHasMore,
    dispatch,
    isLoading,
    hasMore,
    total_item,
  };
};

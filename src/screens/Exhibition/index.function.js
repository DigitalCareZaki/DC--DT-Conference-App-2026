import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExhibition } from '../../redux/actions/main-action';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const { list_loading, exhibition } = useSelector(state => state.main);
  const { total_item } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [isMore, setIsMore] = useState(false);
  const [refeshing, setRefreshing] = useState(false);

  const getExhibitionData = pageNumber => {
    const payload = {
      limit: 10,
      page: pageNumber,
    };
    dispatch(
      getExhibition(payload, exhibition, hasMore => {
        setIsMore(hasMore);
      }),
    );
  };

  useEffect(() => {
    dispatch(setListLoading(true));
    getExhibitionData(1);
  }, []);

  const onEndReached = () => {
    if (list_loading) return;
    if (isMore && exhibition?.length > 0) {
      setPage(page + 1);
      getExhibitionData(page + 1);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setIsMore(false);
    await getExhibitionData(1);
    setRefreshing(false);
  };

  return {
    exhibition,
    onEndReached,
    page,
    total_item,
    isMore,
    refeshing,
    list_loading,
    onRefresh,
  };
};

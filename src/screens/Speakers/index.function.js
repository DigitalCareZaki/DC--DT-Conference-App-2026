import { useDispatch, useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/actions/main-action';
import { useEffect, useState } from 'react';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, speakers } = useSelector(state => state.main);

  const [search, setSearch] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(setListLoading(true));
    dispatch(getSpeakers());
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getSpeakers());
    setRefreshing(false);
  };

  return {
    list_loading,
    search,
    setSearch,
    refreshing,
    onRefresh,
    speakers,
  };
};

import { useDispatch, useSelector } from 'react-redux';
import { getSpeakers } from '../../redux/actions/main-action';
import { useEffect, useState } from 'react';
import { setListLoading } from '../../redux/slices/main-slice';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, speakers } = useSelector(state => state.main);

  const [search, setSearch] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState('internationals');

  useEffect(() => {
    dispatch(setListLoading(true));
    dispatch(getSpeakers());
  }, []);

  const nationalSpeakers = speakers?.filter(
    item => item?.speakerType?.toLowerCase() === 'national',
  );

  const internationalSpeakers = speakers?.filter(
    item => item?.speakerType?.toLowerCase() === 'international',
  );

  const data =
    activeTab === 'internationals' ? internationalSpeakers : nationalSpeakers;

  const handleTabChange = seletedtab => {
    setActiveTab(seletedtab);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await dispatch(getSpeakers());
    setRefreshing(false);
  };

  return {
    data,
    list_loading,
    search,
    setSearch,
    refreshing,
    onRefresh,
    handleTabChange,
    setActiveTab,
    activeTab,
  };
};

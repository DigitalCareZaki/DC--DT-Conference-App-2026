import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';
import { useEffect, useState } from 'react';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, favourites } = useSelector(state => state.main);

  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    dispatch(getFavourites());
  }, [])

  const onRefresh = async () => {
    setRefreshing(true)
    await dispatch(getFavourites())
    setRefreshing(false)
  }

  const onPressHeart = item => {
    const apiData = {
      favoriteId: item?.favoriteId?._id,
      type: item?.type,
    };
    dispatch(addRemoveFav(apiData));
  };


  return {
    favourites,
    onPressHeart,
    refreshing,
    onRefresh,
    list_loading
  };
};

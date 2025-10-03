import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getFavourites } from '../../redux/actions/main-action';

export default () => {
  const { main_loading, favourites } = useSelector(state => state.main);

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

  return {
    main_loading,
    favourites,
    onPressHeart,
    dispatch,
  };
};

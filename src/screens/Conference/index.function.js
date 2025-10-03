import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav } from '../../redux/actions/main-action';

export default () => {
  const { main_loading, conferences } = useSelector(state => state.main);

  const dispatch = useDispatch();

  const onPressHeart = item => {
    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };
  return {
    main_loading,
    conferences,
    onPressHeart,
    dispatch,
  };
};

import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav } from '../../redux/actions/main-action';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';

export default () => {
  const { main_loading, single_conference } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);
  const dispatch = useDispatch();

  const onPressHeart = (item, index) => {
    if (!user) {
      navigate('Login');
      return;
    }
    dispatch(setSelectedItemIndex(index));

    const apiData = {
      favoriteId: item?._id,
      type: 'conference',
    };
    dispatch(addRemoveFav(apiData));
  };
  return {
    main_loading,
    single_conference,
    onPressHeart,
    dispatch,
  };
};

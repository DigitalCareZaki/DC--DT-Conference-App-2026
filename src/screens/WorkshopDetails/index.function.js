import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch();

  const { main_loading, single_workshop } = useSelector(state => state.main);

  const { user } = useSelector(state => state.constant);

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
    const apiData = {
      favoriteId: item?._id,
      type: 'workshop',
    };
    dispatch(addRemoveFav(apiData));
  };
  return {
    main_loading,
    single_workshop,
    onPressHeart,
    dispatch,
  };
};

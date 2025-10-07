import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';
import { setSelectedItemIndex } from '../../redux/slices/main-slice';

export default ({ data }) => {
  const dispatch = useDispatch();

  const { detail_loading, conference_detail } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    dispatch(getConference(data?._id));
  }, [])

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
    detail_loading,
    conference_detail,
    onPressHeart,
  };
};

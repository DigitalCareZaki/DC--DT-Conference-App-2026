import { useDispatch, useSelector } from 'react-redux';
import { addRemoveFav, getConference } from '../../redux/actions/main-action';
import { useEffect } from 'react';

export default ({ data }) => {
  const dispatch = useDispatch();

  const { detail_loading, conference_detail } = useSelector(state => state.main);
  const { user } = useSelector(state => state.constant);

  useEffect(() => {
    dispatch(getConference(data?._id));
  }, [])

  const onPressHeart = item => {
    if (!user) {
      navigate('Login');
      return;
    }
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

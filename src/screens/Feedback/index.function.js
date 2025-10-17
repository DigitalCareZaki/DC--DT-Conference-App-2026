import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../../redux/actions/main-action';
import { getFeedBack } from '../../redux/actions/main-action';
import { useEffect } from 'react';

export default () => {
  const dispatch = useDispatch();

  const { main_loading, feedback, main_post_loading } = useSelector(
    state => state.main,
  );
  const { user } = useSelector(state => state.constant);

  const onPressSubmit = values => {
    const apiData = {
      rating: values.rating,
      likedMost: values.likedMost,
      suggestions: values.suggestions,
    };
    dispatch(addFeedback(apiData));
  };

  useEffect(() => {
    user && dispatch(getFeedBack());
  }, []);

  return {
    main_loading,
    feedback,
    dispatch,
    onPressSubmit,
    main_post_loading,
    user,
  };
};

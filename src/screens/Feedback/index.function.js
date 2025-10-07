import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch()

  const { main_loading, feedback, main_post_loading } = useSelector(state => state.main);

  const onPressSubmit = values => {
    const apiData = {
      rating: values.rating,
      likedMost: values.likedMost,
      suggestions: values.suggestions,
    };
    dispatch(addFeedback(apiData));
  };


  return {
    main_loading,
    feedback,
    dispatch,
    onPressSubmit,
    main_post_loading,
  };
};

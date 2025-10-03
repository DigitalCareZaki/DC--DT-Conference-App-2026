import { useDispatch, useSelector } from 'react-redux';
import {
  getFeedBack,
  postUpdateFeedback,
} from '../../redux/actions/main-action';

export default () => {
  const { main_loading, feedback, main_post_loading } = useSelector(
    state => state.main,
  );

  const dispatch = useDispatch();

  const onPressSubmit = values => {
    const apiData = {
      rating: values.rating,
      likedMost: values.likedMost,
      suggestions: values.suggestions,
    };
    dispatch(postUpdateFeedback(apiData, () => dispatch(getFeedBack())));
  };
  return {
    main_loading,
    feedback,
    dispatch,
    onPressSubmit,
    main_post_loading,
  };
};

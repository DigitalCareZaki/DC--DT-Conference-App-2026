import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { askQuestion, getSpeakers } from '../../redux/actions/main-action';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, speakers, main_post_loading } = useSelector(
    state => state.main,
  );

  useEffect(() => {
    dispatch(getSpeakers());
  }, []);

  const onSubmit = values => {
    const apiData = {
      speakerId: values?.speaker,
      questionText: values?.question,
    };
    dispatch(askQuestion(apiData));
  };
  return {
    onSubmit,
    speakers,
    list_loading,
    main_post_loading,
  };
};

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { askQuestion, getSpeakers } from '../../redux/actions/main-action';
import { showToast } from '../../utils/functions';

export default () => {
  const dispatch = useDispatch();

  const { list_loading, speakers, main_post_loading } = useSelector(
    state => state.main,
  );

  useEffect(() => {
    dispatch(getSpeakers());
  }, []);

  const onSubmit = (values, formActions) => {
    const apiData = {
      speakerId: values?.speaker,
      questionText: values?.question,
    };
    dispatch(
      askQuestion(apiData, res => {
        showToast('success', 'Your question has been submitted successfully!');
        formActions.resetForm();
      }),
    );
  };
  return {
    onSubmit,
    speakers,
    list_loading,
    main_post_loading,
  };
};

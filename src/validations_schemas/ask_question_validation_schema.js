import * as yup from 'yup';

export const ask_question_validation = {
  speaker: '',
  question: '',
};

export const ask_question_validation_schema = yup.object().shape({
  speaker: yup.string().required('This field is required'),
  question: yup.string().required('This field is required'),
});

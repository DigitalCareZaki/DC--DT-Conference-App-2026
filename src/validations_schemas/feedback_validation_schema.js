import * as yup from 'yup';

export const feedback_schema = feedback => ({
  likedMost: feedback?.likedMost ?? '',
  suggestions: feedback?.suggestions ?? '',
  rating: feedback?.rating ?? 0,
});

export const feedback_validation_schema = yup.object().shape({
  likedMost: yup.string().required('This field is required'),
  suggestions: yup.string().required('This field is required'),
});

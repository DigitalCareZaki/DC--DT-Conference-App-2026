import * as yup from 'yup';

export const contact_schema = user => ({
  name: user?.name ?? '',
  email: user?.email ?? '',
  subject: '',
  message: '',
});
export const contact_validation_schema = yup.object().shape({
  name: yup.string().required('This field is required'),
  email: yup.string().required('This field is required'),
  subject: yup.string().required('This field is required'),
  message: yup.string().required('This field is required'),
});

import * as yup from 'yup';

export const signup_schema = data => ({
  name: data?.name ?? '',
  email: data?.email ?? '',
  city: data?.city ?? '',
  dateOfBirth: data?.dateOfBirth ?? null,
});

export const signup_validation_schema = yup.object().shape({
  name: yup.string().required('First Name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter valid email'),
  city: yup.string().required('City is required'),
  dateOfBirth: yup.string().required('Date of Birth is required'),
});

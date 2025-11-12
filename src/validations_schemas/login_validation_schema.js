import * as yup from 'yup';

export const login_schema = {
  email: '',
  password: '',
  // role: "",
};

export const login_validation_schema = yup.object().shape({
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter valid email'),
  password: yup.string().required('Password is Required'),
  role: yup.string().required('Role is Required'),
});

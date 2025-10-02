import * as yup from 'yup';

export const password_schema = data => ({
  password: data?.password ?? '',
  confirmPassword: data?.confirmPassword ?? '',
  isAgreeToTheTerms: data?.isAgreeToTheTerms ?? false,
});

export const password_validation_schema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  isAgreeToTheTerms: yup
    .boolean()
    .oneOf([true], 'Please agree to the terms and conditions'),
});

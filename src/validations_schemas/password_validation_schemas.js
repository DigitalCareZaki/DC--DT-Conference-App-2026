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
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one special character.',
    ),
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  isAgreeToTheTerms: yup
    .boolean()
    .oneOf([true], 'Please agree to the terms and conditions'),
});

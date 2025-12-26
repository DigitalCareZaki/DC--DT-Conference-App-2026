import * as yup from 'yup';

export const company_info_schema = data => ({
  companyName: data?.companyName ?? '',
  designation: data?.designation ?? '',
  displayName: data?.displayName ?? '',
});

export const company_info_validation_schema = yup.object().shape({
  companyName: yup.string().required('Company Name is Required'),
  designation: yup.string().required('Designation is Required'),
  displayName: yup.string().required('Display Name is Required'),
});

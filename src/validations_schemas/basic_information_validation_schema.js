import * as yup from 'yup';

export const basic_info_schema = {
  company_name: '',
  designation: '',
  display_name: '',
};

export const basic_info_validation_schema = yup.object().shape({
  company_name: yup.string().required('Company Name is Required'),
  designation: yup.string().required('Designation is Required'),
  display_name: yup.string().required('Display Name is Required'),
});

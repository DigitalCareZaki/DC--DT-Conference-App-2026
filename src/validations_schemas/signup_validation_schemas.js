import * as yup from "yup";

export const signup_schema = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    phone_number: "",
    password: "",
    confirm_password: "",
}

export const signup_validation_schema = yup.object().shape({
    first_name: yup
        .string()
        .required("First Name is required")
        .min(3, "First Name must be of 3 characters"),
    email: yup
        .string()
        .email("Please enter valid email"),
        // .required("Email is required"),
    phone: yup
        .string()
        .required("Phone Number is required")
        .min(12, "Phone Number must be of 11 numbers"),
    password: yup
        .string()
        .required('password is required')
        .min(8, ({ min }) => `Password must be of ${min} characters`),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),

});



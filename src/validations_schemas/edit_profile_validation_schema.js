import * as yup from "yup";

export const edit_profile_schema = {
    first_name: "",
    last_name: "",
    email: "",
}

export const edit_profile_validation_schema = yup.object().shape({
    first_name: yup
        .string()
        .required("First Name is required")
        .min(3, "First Name must be of 3 characters"),
    email: yup
        .string()
        .email("Please enter valid email")
        .required("Email is required"),
});



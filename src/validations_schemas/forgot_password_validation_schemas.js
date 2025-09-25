import * as yup from "yup";

export const forgot_password_schema = {
    phone: "",
    phone_number: "",
}

export const forgot_password_validation_schema = yup.object().shape({
    phone: yup
        .string()
        .required("Phone Number is required")
        .min(12, "Phone Number must be of 11 numbers"),
});

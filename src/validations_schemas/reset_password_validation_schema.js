import * as yup from "yup";

export const reset_password_schema = {
    password: "",
    confirm_password: ""
}

export const reset_password_validation_schema = yup.object().shape({
    password: yup.string()
        .required("Password is Required")
        .min(8, 'Password must be of 8 characters'),
    confirm_password: yup.string()
        .oneOf([yup.ref("password")], "Password must be same")
});

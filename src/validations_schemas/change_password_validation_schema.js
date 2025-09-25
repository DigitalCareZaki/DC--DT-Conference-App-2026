import * as yup from "yup";

export const change_password_schema = {
    current_password: "",
    new_password: "",
    confirm_password: ""
}

export const change_password_validation_schema = yup.object().shape({
    current_password: yup.string()
        .required("Current Password is Required"),
    new_password: yup.string()
        .required("New Password is Required")
        .min(8, 'New Password must be of 8 characters'),
    confirm_password: yup.string()
        .oneOf([yup.ref("new_password")], "Password must be same")
});

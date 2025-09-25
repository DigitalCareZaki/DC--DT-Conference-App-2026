import * as yup from "yup";

export const address_schema = {
    street: "",
    house_number: "",
    area: ""
}

export const address_validation_schema = yup.object().shape({
    street: yup.string()
        .required("Street is required."),
    house_number: yup.string()
        .required("House Number is required."),
    area: yup.string()
        .required("Area is required.")
});

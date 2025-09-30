import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/auth-action";
import { goBack } from "../../navigation/service";

export default () => {
    const dispatch = useDispatch()

    const { auth_loading } = useSelector(state => state.auth)

    const onPressLogin = async (values) => {
        // Keyboard.dismiss()
        // const apiData = {
        //     phone: `+92${values?.phone_number?.slice(1)}`,
        //     password: values?.password
        // }
        // dispatch(login(apiData))
        goBack()
    }


    return {
        onPressLogin,
        auth_loading
    }
}
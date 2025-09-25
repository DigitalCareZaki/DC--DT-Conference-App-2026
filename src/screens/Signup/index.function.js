import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/auth-action";
import { navigate } from "../../navigation/service";

export default () => {
    const dispatch = useDispatch()

    const [isKeybaord, setIsKeyboard] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const { auth_loading } = useSelector(state => state.auth)

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboard(true)
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboard(false)
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    const onPressSignup = async (values) => {
        Keyboard.dismiss()
        const apiData = {
            firstName: values?.first_name,
            lastName: values?.last_name,
            email: values?.email?.trim()?.toLowerCase(),
            password: values?.password,
            phone: `+92${values?.phone_number?.slice(1)}`,
        }
        dispatch(signup(apiData, () => navigate("Otp", { phone: apiData?.phone, isForgot: false })))
    }


    return {
        isKeybaord,
        onPressSignup,
        auth_loading,
        selectedIndex,
        setSelectedIndex
    }
}
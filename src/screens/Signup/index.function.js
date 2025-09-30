import { useState } from "react";
import { Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { goBack, resetNavigationStack } from "../../navigation/service";

export default () => {
    const dispatch = useDispatch()

    const [selectedIndex, setSelectedIndex] = useState(0);

    const { auth_loading } = useSelector(state => state.auth)

    const onPressButton = async (values) => {
        Keyboard.dismiss()

        if (selectedIndex < 3) setSelectedIndex(selectedIndex + 1)
        else goBack()
    }

    const onPressBack = () => {
        if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1)
        else goBack()
    }



    return {
        onPressButton,
        auth_loading,
        selectedIndex,
        onPressBack
    }
}
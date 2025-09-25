import { da } from "date-fns/locale";
import apiServices from "../../api_services/request-handler";
import { goBack, navigate, resetNavigationStack } from "../../navigation/service";
import { convertArrayToObj, requestHandler, setToken } from "../../utils/functions";
import { setAuthLoading } from "../slices/auth-slice";
import { setCartData, setGeneralSettings, setUser } from "../slices/constant-slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { requestUserPermission } from "../../utils/notification_service";
import { Platform } from "react-native";
import { setLatestOrder } from "../slices/order-slice";

export const signup = (data, onDone) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                setLoading: setAuthLoading,
                apiService: apiServices.signup,
                param_data: data,
                onDone,
                isSuccessMessage: true
            }),
        );
    };
};
export const login = (data) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                setLoading: setAuthLoading,
                apiService: apiServices.login,
                isSuccessMessage: true,
                param_data: data,
                onDone: async val => {
                    console.log("Login ho gayaya")
                }
            }),
        );
    };
};

export const getUserDetail = (user) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getUserDetail,
                onDone: val => {
                    dispatch(setUser({ ...user, ...val?.data }))
                },
            }),
        );
    };
};

// export const updateFcm = async () => {
//     const fcm_token = await requestUserPermission()
//     const apiData = {
//         token: fcm_token,
//         deviceType: Platform.OS,
//     }
//     console.log("apiData", apiData)
//     return async dispatch => {
//         dispatch(
//             requestHandler({
//                 apiService: apiServices.updateFcm,
//                 param_data: apiData,
//                 onDone: val => {
//                 }
//             }),
//         );
//     };
// };
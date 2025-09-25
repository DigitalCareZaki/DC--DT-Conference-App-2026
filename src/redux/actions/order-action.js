import apiServices from "../../api_services/request-handler";
import { requestHandler } from "../../utils/functions";
import { setCartData } from "../slices/constant-slice";
import { setLatestOrder, setMoreOrder, setOrderDetails, setOrderLoading, setOrders } from "../slices/order-slice";

export const getOrders = (params, orders) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getOrders,
                param_data: params,
                setLoading: setOrderLoading,
                onDone: val => {
                    // setMoreOrder(val?.pagination?.hasNextPage)
                    // if (params?.page == 1) {
                    dispatch(setOrders(val?.data))
                    // } else {
                    // dispatch(setOrders([...orders, ...val?.data]))
                    // }
                }
            }),
        );
    };
};
export const getOrderDetail = (id, onDone) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getOrderDetail,
                param_data: id,
                setLoading: setOrderLoading,
                setData: setOrderDetails,
                onDone: () => onDone && onDone(),
            }),
        );
    };
};
export const getLatestOrder = () => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getLatestOrder,
                onDone: val => {
                    const status = val?.data?.status;
                    if (status === 'new' || status === 'in_review' || status === 'preparing') {
                        dispatch(setLatestOrder(val?.data))
                    } else dispatch(setLatestOrder(null))
                }
            }),
        );
    };
};
export const createOrder = (data) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.createOrder,
                param_data: data,
                setLoading: setOrderLoading,
                setData: setOrderDetails,
                onDone: val => { dispatch(setCartData([])) },
            }),
        );
    };
};
export const updateOrderItem = (data, onDone, onError) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.updateOrderItem,
                param_data: data,
                setLoading: setOrderLoading,
                setData: setOrderDetails,
                onError,
                onDone: () => onDone && onDone()
            }),
        );
    };
};
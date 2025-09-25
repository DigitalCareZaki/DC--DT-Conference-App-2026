import apiServices from "../../api_services/request-handler";
import { requestHandler } from "../../utils/functions";
import { setCategories, setHomeData } from "../slices/constant-slice";
import { setCategoryDetail, setCategoryLoading, setProductDetail, setProductLoading, setProducts } from "../slices/product-slice";

export const getHomeData = () => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getHomeData,
                setData: setHomeData
            }),
        );
    };
};
export const getCategories = params => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getCategories,
                param_data: params,
                setData: setCategories,
                onDone: val => {
                },
            }),
        );
    };
};
export const getProducts = (id) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getProducts,
                param_data: id,
                setData: setProducts,
                setLoading: setProductLoading,
                onDone: val => { }
            }),
        );
    };
};
export const getProductDetail = (id) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getProductDetail,
                param_data: id,
                setData: setProductDetail,
            }),
        );
    };
};
export const getCategoryDetail = (id, onDone) => {
    return async dispatch => {
        dispatch(
            requestHandler({
                apiService: apiServices.getCategoryDetail,
                param_data: id,
                setLoading:setCategoryLoading,
                setData: setCategoryDetail,
                onDone: val => onDone && onDone(val)

            }),
        );
    };
};
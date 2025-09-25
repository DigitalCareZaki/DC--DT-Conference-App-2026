import { get, patch, post } from "./http-provider";

export const SERVICE_URLS = {

    // Common Management
    // uploadImage: "upload",

    // Auth Management
    login: "/v1/user/auth/login",
    signup: "/v1/user/auth/signup",
    forgetPassword: "/v1/user/auth/forgot-password",
    resendOtp: "/v1/user/auth/resend-otp",
    verifyOtp: "/v1/user/auth/verify-otp",
    resetPassword: "/v1/user/auth/reset-password",
    changePassword: "/v1/user/auth/change-password",
    getUserDetail: "/v1/user/auth/my-profile",
    updateUser: "/v1/user/auth/update-profile",
    logout: "/v1/user/auth/logout",
    refreshAuthToken: "/v1/user/auth/access-token",
    updateFcm: "/v1/user/fcm-token",

    //Product Management
    getHomeData: "/v1/settings/homepage",
    getCategories: "/v1/categories",
    getProduct: "/v1/products",
    getProductDetail: "/v1/products/",
    getGeneralSettings: "/v1/settings/general",
    getCategoryDetail: "/v1/categories/",


    //Order Management
    getOrders: "/v1/user/orders",
    getOrderDetail: "/v1/user/orders/",
    getLatestOrder: "/v1/user/orders/latest",
    createOrder: "/v1/user/orders/create",
    updateOrderItem: "/v1/user/orders/replace-item/",


};

// Common Managemnt
// const uploadImage = (data) => post(SERVICE_URLS.uploadImage, data, true);

//Auth Management
const login = data => post(SERVICE_URLS.login, data);
const signup = data => post(SERVICE_URLS.signup, data);
const forgetPassword = data => post(SERVICE_URLS.forgetPassword, data);
const resendOtp = data => post(SERVICE_URLS.resendOtp, data);
const verifyOtp = data => post(SERVICE_URLS.verifyOtp, data);
const resetPassword = data => post(SERVICE_URLS.resetPassword, data);
const changePassword = data => patch(SERVICE_URLS.changePassword, data);
const getUserDetail = () => post(SERVICE_URLS.getUserDetail);
const updateUser = data => patch(SERVICE_URLS.updateUser, data);
const logout = () => post(SERVICE_URLS.logout);
const refreshAuthToken = data => post(SERVICE_URLS.refreshAuthToken, data);
const updateFcm = data => post(SERVICE_URLS.updateFcm, data);

// Product Managementxwx
const getHomeData = () => get(SERVICE_URLS.getHomeData);
const getCategories = params => get(SERVICE_URLS.getCategories, params);
const getProducts = params => get(SERVICE_URLS.getProduct + params);
const getProductDetail = params => get(SERVICE_URLS.getProductDetail + params);
const getGeneralSettings = () => get(SERVICE_URLS.getGeneralSettings);
const getCategoryDetail = params => get(SERVICE_URLS.getCategoryDetail + params);

//Order Management
const getOrders = (params) => get(SERVICE_URLS.getOrders, params);
const getOrderDetail = (params) => get(SERVICE_URLS.getOrderDetail + params);
const getLatestOrder = () => get(SERVICE_URLS.getLatestOrder);
const createOrder = data => post(SERVICE_URLS.createOrder, data);
const updateOrderItem = data => post(SERVICE_URLS.updateOrderItem + data?.id, data?.data);


const apiServices = {

    // Auth Management
    login,
    signup,
    forgetPassword,
    resendOtp,
    verifyOtp,
    resetPassword,
    changePassword,
    getUserDetail,
    updateUser,
    logout,
    refreshAuthToken,
    updateFcm,

    //Category Management
    getHomeData,
    getCategories,
    getProducts,
    getProductDetail,
    getGeneralSettings,
    getCategoryDetail,

    //Service Management
    getOrders,
    getOrderDetail,
    getLatestOrder,
    createOrder,
    updateOrderItem
};

export default apiServices;

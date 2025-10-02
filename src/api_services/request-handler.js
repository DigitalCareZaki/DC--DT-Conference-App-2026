import { get, patch, post } from './http-provider';

export const SERVICE_URLS = {
  // Auth Management
  login: '/v1/user/auth/login',
  signup: '/v1/user/auth/signup',
  forgetPassword: '/v1/user/auth/forgot-password',
  resendOtp: '/v1/user/auth/resend-otp',
  verifyOtp: '/v1/user/auth/verify-otp',
  resetPassword: '/v1/user/auth/reset-password',
  changePassword: '/v1/user/auth/change-password',
  getUserDetail: '/v1/user/auth/my-profile',
  updateUser: '/v1/user/auth/update-profile',
  logout: '/v1/user/auth/logout',
  refreshAuthToken: '/v1/user/auth/access-token',
  updateFcm: '/v1/user/fcm-token',

  // Main Action
  getConferences: '/conference',
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

// Main Management
const getConferences = () => get(SERVICE_URLS.getConferences);

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

  // Main Management
  getConferences,
};

export default apiServices;

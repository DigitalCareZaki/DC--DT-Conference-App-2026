import { del, get, post, put } from './http-provider';

export const SERVICE_URLS = {
  // Auth Management
  register: '/auth/register',
  login: '/auth/login',
  getAllUser: '/user',
  getProfile: '/user/profile',
  googleLogin: '/auth/google',
  sendOtp: '/user/send-otp',
  resetPassword: '/user/reset-password',
  deleteAccount: '/user/delete/',
  singleUser: '/user/',

  // Main Management
  getConferences: '/conference',
  getConference: '/conference/',
  getWorkshops: '/workshop',
  getWorkshop: '/workshop/',
  getGallery: '/gallery',
  getExhibition: '/exhibition',
  getSpeakers: '/speaker?limit=1000',
  getFavourites: '/user/favorites?page=1&limit=1000',
  addRemoveFavourite: '/user/favorites',
  getFeedback: '/feedbacks/user',
  addFeedback: '/feedbacks/submit-update',
  updateLinks: '/user/update',
  verifyOtp: '/user/verify-otp',
  askQuestion: '/question',
};

// Auth
const register = data => post(SERVICE_URLS.register, data);
const login = data => post(SERVICE_URLS.login, data);
const getAllUser = data => get(SERVICE_URLS.getAllUser, data);
const getProfile = () => get(SERVICE_URLS.getProfile);
const googleLogin = data => post(SERVICE_URLS.googleLogin, data);
const sendOtp = data => post(SERVICE_URLS.sendOtp, data);
const verifyOtp = data => post(SERVICE_URLS.verifyOtp, data);
const resetPassword = data => post(SERVICE_URLS.resetPassword, data);

// Main Management
const getConferences = data => get(SERVICE_URLS.getConferences, data);
const getConference = params => get(SERVICE_URLS.getConference + params);
const getWorkshops = data => get(SERVICE_URLS.getWorkshops, data);
const getWorkshop = params => get(SERVICE_URLS.getWorkshop + params);
const getGallery = data => get(SERVICE_URLS.getGallery, data);
const getExhibition = data => get(SERVICE_URLS.getExhibition, data);
const getSpeakers = () => get(SERVICE_URLS.getSpeakers);
const getFavourites = data => get(SERVICE_URLS.getFavourites, data);
const addRemoveFavourite = data => post(SERVICE_URLS.addRemoveFavourite, data);
const getFeedBack = () => get(SERVICE_URLS.getFeedback);
const addFeedback = data => put(SERVICE_URLS.addFeedback, data);
const updateLinks = data => put(SERVICE_URLS.updateLinks, data);
const askQuestion = data => post(SERVICE_URLS.askQuestion, data);
const getSingleUser = data => get(SERVICE_URLS.singleUser + data);
const deleteAccount = data => del(SERVICE_URLS.deleteAccount + data);

const apiServices = {
  // Auth
  register,
  login,
  getAllUser,
  getProfile,
  googleLogin,
  sendOtp,
  verifyOtp,
  resetPassword,

  // Main Management
  getConferences,
  getConference,
  getWorkshops,
  getWorkshop,
  getGallery,
  getExhibition,
  getSpeakers,
  getFavourites,
  addRemoveFavourite,
  getFeedBack,
  addFeedback,
  updateLinks,
  askQuestion,
  deleteAccount,
  getSingleUser,
};

export default apiServices;

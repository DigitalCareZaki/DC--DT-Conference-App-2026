import { get, post, put } from './http-provider';

export const SERVICE_URLS = {
  // Auth Management
  register: '/auth/register',
  login: '/auth/login',
  getAllUser: '/user',
  getProfile: '/user/profile',
  googleLogin: '/auth/google',

  // Main Management
  getConferences: '/conference',
  getConferencesByID: '/conference/',
  getWorkshops: '/workshop',
  getWorkshopsById: '/workshop/',
  getGallery: '/gallery',
  getExhibition: '/exhibition',
  getSpeakers: '/speaker',
  favourites: '/user/favorites',
  getFeedbacks: '/feedbacks/user',
  postUpdateFeedback: '/feedbacks/submit-update',
  updateLinks: '/user/update',
};

// Auth
const register = data => post(SERVICE_URLS.register, data);
const login = data => post(SERVICE_URLS.login, data);
const getAllUser = () => get(SERVICE_URLS.getAllUser);
const getProfile = () => get(SERVICE_URLS.getProfile);
const googleLogin = data => post(SERVICE_URLS.googleLogin, data);

// Main Management
const getConferences = data => get(SERVICE_URLS.getConferences, data);
const getConferencesById = params =>
  get(SERVICE_URLS.getConferencesByID + params);
const getWorkshops = data => get(SERVICE_URLS.getWorkshops, data);
const getWorkshopsById = params => get(SERVICE_URLS.getWorkshopsById + params);
const getGallery = () => get(SERVICE_URLS.getGallery);
const getExhibition = data => get(SERVICE_URLS.getExhibition, data);
const getSpeakers = () => get(SERVICE_URLS.getSpeakers);
const getFavourites = () => get(SERVICE_URLS.favourites);
const addRemoveFavourite = data => post(SERVICE_URLS.favourites, data);
const getFeedBacks = () => get(SERVICE_URLS.getFeedbacks);
const postUpdateFeedback = data => put(SERVICE_URLS.postUpdateFeedback, data);
const updateLinks = data => put(SERVICE_URLS.updateLinks, data);

const apiServices = {
  // Auth
  register,
  login,
  getAllUser,
  getProfile,
  googleLogin,

  // Main Management
  getConferences,
  getConferencesById,
  getWorkshops,
  getWorkshopsById,
  getGallery,
  getExhibition,
  getSpeakers,
  getFavourites,
  addRemoveFavourite,
  getFeedBacks,
  postUpdateFeedback,
  updateLinks,
};

export default apiServices;

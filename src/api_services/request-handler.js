import { get, post, put } from './http-provider';

export const SERVICE_URLS = {
  // Auth Management
  register: '/auth/register',
  login: '/auth/login',

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
  postUpdateFeedback: 'feedbacks/submit-update',
  updateLinks: '/user/update',
};

// Auth
const register = data => post(SERVICE_URLS.register, data);
const login = data => post(SERVICE_URLS.login, data);

// Main Management
const getConferences = () => get(SERVICE_URLS.getConferences);
const getConferencesById = params =>
  get(SERVICE_URLS.getConferencesByID + params);
const getWorkshops = () => get(SERVICE_URLS.getWorkshops);
const getWorkshopsById = params => get(SERVICE_URLS.getWorkshopsById + params);
const getGallery = () => get(SERVICE_URLS.getGallery);
const getExhibition = () => get(SERVICE_URLS.getExhibition);
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

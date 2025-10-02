import { get, post } from './http-provider';

export const SERVICE_URLS = {
  // Auth Management
  register: '/auth/register',

  // Main Management
  getConferences: '/conference',
  getConferencesByID: '/conference/',
  getWorkshops: '/workshop',
  getWorkshopsById: '/workshop/',
  getGallery: '/gallery',
  getExhibition: '/exhibition',
  getSpeakers: '/speaker',
};

// Auth
const register = data => post(SERVICE_URLS.register, data);

// Main Management
const getConferences = () => get(SERVICE_URLS.getConferences);
const getConferencesById = params =>
  get(SERVICE_URLS.getConferencesByID + params);
const getWorkshops = () => get(SERVICE_URLS.getWorkshops);
const getWorkshopsById = params => get(SERVICE_URLS.getWorkshopsById + params);
const getGallery = () => get(SERVICE_URLS.getGallery);
const getExhibition = () => get(SERVICE_URLS.getExhibition);
const getSpeakers = () => get(SERVICE_URLS.getSpeakers);

const apiServices = {
  // Main Management
  getConferences,
  getConferencesById,
  getWorkshops,
  getWorkshopsById,
  getGallery,
  getExhibition,
  getSpeakers,
  register,
};

export default apiServices;

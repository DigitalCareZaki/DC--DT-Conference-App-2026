import { get } from './http-provider';

export const SERVICE_URLS = {
  // Main Action
  getConferences: '/conference',
  getConferencesByID: '/conference/',
};

// Main Management
const getConferences = () => get(SERVICE_URLS.getConferences);
const getConferencesById = params =>
  get(SERVICE_URLS.getConferencesByID + params);

const apiServices = {
  // Main Management
  getConferences,
  getConferencesById,
};

export default apiServices;

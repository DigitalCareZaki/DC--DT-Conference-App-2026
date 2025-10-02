import { get } from './http-provider';

export const SERVICE_URLS = {
  // Main Management
  getConferences: '/conference',
  getConferencesByID: '/conference/',
  getWorkshops: '/workshop',
  getWorkshopsById: '/workshop/',
};

// Main Management
const getConferences = () => get(SERVICE_URLS.getConferences);
const getConferencesById = params =>
  get(SERVICE_URLS.getConferencesByID + params);
const getWorkshops = () => get(SERVICE_URLS.getWorkshops);
const getWorkshopsById = params => get(SERVICE_URLS.getWorkshopsById + params);

const apiServices = {
  // Main Management
  getConferences,
  getConferencesById,
  getWorkshops,
  getWorkshopsById,
};

export default apiServices;

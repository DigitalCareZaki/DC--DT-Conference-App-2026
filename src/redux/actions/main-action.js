import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import {
  setConferences,
  setExhibition,
  setGallery,
  setMainLoading,
  setSingleConference,
  setSingleWorkshop,
  setSpeakers,
  setWorkshops,
} from '../slices/main-slice';

// Conferences

export const getConferences = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getConferences,
        onDone: async res => {
          dispatch(setConferences(res?.data?.data));
        },
      }),
    );
  };
};

export const getConferencesById = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getConferencesById,
        param_data: data,
        onDone: async res => {
          dispatch(setSingleConference(res?.data));
        },
      }),
    );
  };
};

// Workshops
export const getWorkshops = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getWorkshops,
        onDone: async res => {
          dispatch(setWorkshops(res?.data?.data));
        },
      }),
    );
  };
};

export const getWorkshopById = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: data,
        apiService: apiServices.getWorkshopsById,
        onDone: async res => {
          console.log('res', res);
          dispatch(setSingleWorkshop(res?.data));
        },
      }),
    );
  };
};

// Gallery

export const getGallery = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getGallery,
        onDone: async res => {
          dispatch(setGallery(res?.data?.data));
        },
      }),
    );
  };
};

// Exhibition

export const getExhibition = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getExhibition,
        onDone: async res => {
          dispatch(setExhibition(res?.data?.data));
        },
      }),
    );
  };
};

// Speakers

export const getSpeakers = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getSpeakers,
        onDone: async res => {
          dispatch(setSpeakers(res?.data ?? []));
        },
      }),
    );
  };
};

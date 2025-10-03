import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import {
  setConferences,
  setExhibition,
  setFavList,
  setFavourites,
  setFeedback,
  setGallery,
  setMainLoading,
  setMainPostLoading,
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

// Favourite
export const getFavourites = onDone => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getFavourites,
        onDone: async res => {
          dispatch(setFavourites(res?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

export const addRemoveFav = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.addRemoveFavourite,
        param_data: data,
        onDone: async res => {
          dispatch(setFavList(res?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

// Feedbacl
export const getFeedBack = onDone => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getFeedBacks,
        onDone: async res => {
          dispatch(setFeedback(res?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

export const postUpdateFeedback = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainPostLoading,
        param_data: data,
        apiService: apiServices.postUpdateFeedback,
        onDone: async res => {
          onDone && onDone(res);
        },
      }),
    );
  };
};

// Social Media Links
export const updateLinks = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: data,
        apiService: apiServices.updateLinks,
        onDone: async res => {
          onDone && onDone(res);
        },
      }),
    );
  };
};

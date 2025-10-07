import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setTotalItems } from '../slices/auth-slice';
import {
  setConferenceDetail,
  setConferences,
  setDetailLoading,
  setExhibition,
  setFavList,
  setFavourites,
  setFeedback,
  setGallery,
  setListLoading,
  setMainLoading,
  setMainPostLoading,
  setSingleConference,
  setSingleWorkshop,
  setSpeakers,
  setWorkshops,
} from '../slices/main-slice';

// Conferences

export const getConferences = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setListLoading,
        param_data: params,
        apiService: apiServices.getConferences,
        onDone: async res => {
          dispatch(setTotalItems(res?.data?.pagination?.totalItems));
          if (params?.page === 1) {
            dispatch(setConferences(res?.data?.data ?? []));
          } else {
            dispatch(setConferences([...array, ...(res?.data?.data ?? [])]));
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
        },
      }),
    );
  };
};

export const getConference = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setDetailLoading,
        apiService: apiServices.getConference,
        param_data: data,
        setData: setConferenceDetail,
      }),
    );
  };
};

// Workshops
export const getWorkshops = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getWorkshops,
        onDone: async res => {
          dispatch(setTotalItems(res?.data?.pagination?.totalItems));
          if (params?.page === 1) {
            dispatch(setWorkshops(res?.data?.data));
          } else {
            dispatch(setWorkshops([...array, ...(res?.data?.data ?? [])]));
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
        },
      }),
    );
  };
};

export const getWorkshop = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: data,
        apiService: apiServices.getWorkshop,
        onDone: async res => {
          dispatch(setSingleWorkshop(res?.data));
        },
      }),
    );
  };
};

// Gallery

export const getGallery = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getGallery,
        onDone: async res => {
          dispatch(setTotalItems(res?.data?.pagination?.totalItems));

          if (params?.page === 1) {
            dispatch(setGallery(res?.data?.data));
          } else {
            dispatch(setGallery([...array, ...(res?.data?.data ?? [])]));
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
        },
      }),
    );
  };
};

// Exhibition

export const getExhibition = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getExhibition,
        onDone: async res => {
          dispatch(setTotalItems(res?.data?.pagination?.totalItems));
          if (params?.page === 1) {
            dispatch(setExhibition(res?.data?.data));
          } else {
            dispatch(setExhibition([...array, ...(res?.data?.data ?? [])]));
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
        },
      }),
    );
  };
};

export const getSpeakers = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setListLoading,
        apiService: apiServices.getSpeakers,
        onDone: async res => {
          dispatch(setSpeakers(res?.data?.data ?? []));
        },
      }),
    );
  };
};

// Favourite
export const getFavourites = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getFavourites,
        onDone: async res => {
          dispatch(setFavourites(res?.data?.favorites));
        },
      }),
    );
  };
};

export const addRemoveFav = (data) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.addRemoveFavourite,
        param_data: data,
        onDone: () => dispatch(getFavourites())
      }),
    );
  };
};

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

export const addFeedback = (data) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainPostLoading,
        param_data: data,
        apiService: apiServices.addFeedback,
        onDone: async () => dispatch(getFeedBack())
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

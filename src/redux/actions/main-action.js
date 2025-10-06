import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setTotalItems } from '../slices/auth-slice';
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

export const getConferences = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getConferences,
        onDone: async res => {
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
export const getWorkshops = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getWorkshops,
        onDone: async res => {
          console.log('res....', res);
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

export const getWorkshopById = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: data,
        apiService: apiServices.getWorkshopsById,
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
  console.log('params', params);
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getExhibition,
        onDone: async res => {
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

// Speakers

export const getSpeakers = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getSpeakers,
        onDone: async res => {
          dispatch(setSpeakers(res?.data?.data ?? []));
        },
      }),
    );
  };
};

// Favourite
export const getFavourites = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        param_data: params,
        apiService: apiServices.getFavourites,
        onDone: async res => {
          if (params?.page === 1) {
            dispatch(setFavourites(res?.data?.favorites));
          } else {
            dispatch(
              setFavourites([...array, ...(res?.data?.favorites ?? [])]),
            );
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
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
          console.log('res', res);
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

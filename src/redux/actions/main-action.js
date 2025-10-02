import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import {
  setConferences,
  setMainLoading,
  setSingleConference,
} from '../slices/main-slice';

// Conferences

export const getConferences = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setMainLoading,
        apiService: apiServices.getConferences,
        param_data: data,
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

import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setConferences, setMainLoading } from '../slices/main-slice';

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

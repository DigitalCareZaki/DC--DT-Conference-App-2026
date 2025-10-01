import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setAuthLoading } from '../slices/auth-slice';

export const signup = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.signup,
        param_data: data,
        onDone,
        isSuccessMessage: true,
      }),
    );
  };
};

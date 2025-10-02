import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setAuthLoading, setUser } from '../slices/auth-slice';

export const signup = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.register,
        param_data: data,
        onDone: async res => {
          dispatch(setUser(res?.data?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

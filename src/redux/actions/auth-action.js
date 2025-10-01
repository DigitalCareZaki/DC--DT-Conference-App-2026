import apiServices from '../../api_services/request-handler';
import { requestHandler } from '../../utils/functions';
import { setAuthLoading } from '../slices/auth-slice';
import { setUser } from '../slices/main-slice';

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
export const login = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.login,
        isSuccessMessage: true,
        param_data: data,
        onDone: async val => {},
      }),
    );
  };
};

export const getUserDetail = user => {
  return async dispatch => {
    dispatch(
      requestHandler({
        apiService: apiServices.getUserDetail,
        onDone: val => {
          dispatch(setUser({ ...user, ...val?.data }));
        },
      }),
    );
  };
};

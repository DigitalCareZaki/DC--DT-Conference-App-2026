import apiServices from '../../api_services/request-handler';
import { setToken } from '../../utils/auth.util';
import { requestHandler } from '../../utils/functions';
import { setAllUsers, setAuthLoading, setUser } from '../slices/auth-slice';

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

export const login = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.login,
        param_data: data,
        onDone: async res => {
          dispatch(setUser(res?.data?.user));
          onDone && onDone(res);
        },
      }),
    );
  };
};

export const getAllUsers = onDone => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.getAllUser,
        onDone: async res => {
          dispatch(setAllUsers(res?.data?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

export const getUserProfile = onDone => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.getProfile,
        onDone: async res => {
          dispatch(setUser(res?.data));
          onDone && onDone(res);
        },
      }),
    );
  };
};

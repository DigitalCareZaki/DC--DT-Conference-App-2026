import apiServices from '../../api_services/request-handler';
import { goBack, navigate } from '../../navigation/service';
import { requestHandler, setToken } from '../../utils/functions';
import {
  setAllUsers,
  setAuthLoading,
  setGoogleSigninLoading,
  setIsUserVerified,
  setResetPasswordToken,
  setTotalItems,
  setUserEmail,
} from '../slices/auth-slice';
import { setUser } from '../slices/constant-slice';
import { setListLoading } from '../slices/main-slice';

export const signup = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.register,
        param_data: data,
        isAuth: true,
        onDone: async res => {
          dispatch(setUser(res?.data?.data));
          goBack();
        },
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
        param_data: data,
        isAuth: true,
        onDone: async res => {
          await setToken(res?.data?.accessToken);
          dispatch(setUser(res?.data?.user));
          goBack();
        },
      }),
    );
  };
};

export const googleLogin = data => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setGoogleSigninLoading,
        param_data: data,
        apiService: apiServices.googleLogin,
        isAuth: true,
        onDone: async res => {
          await setToken(res?.data?.accessToken);
          dispatch(setUser(res?.data?.user));
          goBack();
        },
      }),
    );
  };
};

export const getAllUsers = (params, array, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        param_data: params,
        apiService: apiServices.getAllUser,
        isAuth: true,
        onDone: async res => {
          dispatch(setTotalItems(res?.data?.pagination?.totalItems));
          if (params?.page === 1) {
            dispatch(setAllUsers(res?.data?.data));
          } else {
            dispatch(setAllUsers([...array, ...(res?.data?.data ?? [])]));
          }
          onDone && onDone(res?.data?.pagination?.hasNextPage);
        },
      }),
    );
  };
};

export const getUserProfile = () => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        apiService: apiServices.getProfile,
        onDone: async res => dispatch(setUser(res?.data)),
      }),
    );
  };
};

export const sendOtp = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        param_data: data,
        apiService: apiServices.sendOtp,
        onDone: async res => {
          dispatch(setUserEmail(res?.data?.email));
          onDone && onDone();
        },
      }),
    );
  };
};

export const verifyOtp = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        param_data: data,
        apiService: apiServices.verifyOtp,
        onDone: async res => {
          dispatch(setResetPasswordToken(res?.data?.resetPasswordToken));
          dispatch(setIsUserVerified(res?.data?.isVerified));
          onDone && onDone();
        },
      }),
    );
  };
};

export const resetPassword = (data, onDone) => {
  return async dispatch => {
    dispatch(
      requestHandler({
        setLoading: setAuthLoading,
        param_data: data,
        apiService: apiServices.resetPassword,
        onDone: async res => {
          onDone && onDone();
        },
      }),
    );
  };
};

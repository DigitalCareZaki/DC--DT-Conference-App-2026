import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth_loading: false,
  all_users: null,
  google_signin_loading: null,
  apple_signin_loading: null,
  total_item: null,
  reset_password_token: null,
  user_email: null,
  show_toast_modal: null,
  toast_title: null,
  toast_description: null,
  is_error: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action) => {
      state.auth_loading = action.payload;
    },
    setAllUsers: (state, action) => {
      state.all_users = action.payload;
    },
    setGoogleSigninLoading: (state, action) => {
      state.google_signin_loading = action.payload;
    },
    setAppleSigninLoading: (state, action) => {
      state.apple_signin_loading = action.payload;
    },
    setTotalItems: (state, action) => {
      state.total_item = action.payload;
    },

    setResetPasswordToken: (state, action) => {
      state.reset_password_token = action.payload;
    },
    setUserEmail: (state, action) => {
      state.user_email = action.payload;
    },
    setToastData: (state, action) => {
      state.show_toast_modal = action.payload?.show_toast_modal;
      state.toast_title = action.payload?.toast_title;
      state.toast_description = action.payload?.toast_description;
      state.is_error = action.payload?.is_error;
    },
  },
});

export const {
  setAuthLoading,
  setAllUsers,
  setGoogleSigninLoading,
  setAppleSigninLoading,
  setIsAuth,
  setTotalItems,
  setResetPasswordToken,
  setUserEmail,
  setToastData,
} = authSlice.actions;

export default authSlice.reducer;

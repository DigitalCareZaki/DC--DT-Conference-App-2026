import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth_loading: false,
  all_users: null,
  google_signin_loading: null,
  total_item: null,
  reset_password_token: null,
  user_email: null,
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
    setTotalItems: (state, action) => {
      state.total_item = action.payload;
    },

    setResetPasswordToken: (state, action) => {
      state.reset_password_token = action.payload;
    },
    setUserEmail: (state, action) => {
      state.user_email = action.payload;
    },
  },
});

export const {
  setAuthLoading,
  setAllUsers,
  setGoogleSigninLoading,
  setIsAuth,
  setTotalItems,
  setResetPasswordToken,
  setUserEmail,
} = authSlice.actions;

export default authSlice.reducer;

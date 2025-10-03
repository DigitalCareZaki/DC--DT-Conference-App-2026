import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth_loading: false,
  user: null,
  all_users: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthLoading: (state, action) => {
      state.auth_loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAllUsers: (state, action) => {
      state.all_users = action.payload;
    },
  },
});

export const { setAuthLoading, setUser, setAllUsers } = authSlice.actions;

export default authSlice.reducer;

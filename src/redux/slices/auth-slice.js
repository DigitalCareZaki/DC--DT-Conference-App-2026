import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth_loading: false,
  user: null,
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
  },
});

export const { setAuthLoading, setUser } = authSlice.actions;

export default authSlice.reducer;

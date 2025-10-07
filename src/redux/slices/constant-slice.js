import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const constantSlice = createSlice({
  name: 'constant',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setUser,
} = constantSlice.actions;

export default constantSlice.reducer;

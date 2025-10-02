import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_loading: null,
  conferences: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,

  reducers: {
    setMainLoading: (state, action) => {
      state.main_loading = action.payload;
    },
    setConferences: (state, action) => {
      state.conferences = action.payload;
    },
  },
});

export const { setConferences, setMainLoading } = mainSlice.actions;

export default mainSlice.reducer;

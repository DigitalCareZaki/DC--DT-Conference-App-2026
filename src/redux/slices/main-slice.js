import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_loading: null,
  conferences: null,
  single_conference: null,
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
    setSingleConference: (state, action) => {
      state.single_conference = action.payload;
    },
  },
});

export const { setMainLoading, setConferences, setSingleConference } =
  mainSlice.actions;

export default mainSlice.reducer;

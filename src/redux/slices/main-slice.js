import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_loading: null,
  conferences: null,
  single_conference: null,
  workshops: null,
  single_workshop: null,
  gallery: null,
  exhibition: null,
  speakers: null,
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
    setWorkshops: (state, action) => {
      state.workshops = action.payload;
    },
    setSingleWorkshop: (state, action) => {
      state.single_workshop = action.payload;
    },
    setGallery: (state, action) => {
      state.gallery = action.payload;
    },
    setExhibition: (state, action) => {
      state.exhibition = action.payload;
    },
    setSpeakers: (state, action) => {
      state.speakers = action.payload;
    },
  },
});

export const {
  setMainLoading,
  setConferences,
  setSingleConference,
  setWorkshops,
  setSingleWorkshop,
  setGallery,
  setExhibition,
  setSpeakers,
} = mainSlice.actions;

export default mainSlice.reducer;

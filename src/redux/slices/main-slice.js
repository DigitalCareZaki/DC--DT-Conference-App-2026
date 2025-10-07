import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_loading: null,
  list_loading: null,
  detail_loading: null,
  conferences: null,
  conference_detail: null,
  workshops: null,
  single_workshop: null,
  gallery: null,
  exhibition: null,
  speakers: [],
  favourites: null,
  feedback: null,
  main_post_loading: false,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,

  reducers: {
    setMainLoading: (state, action) => {
      state.main_loading = action.payload;
    },
    setListLoading: (state, action) => {
      state.list_loading = action.payload;
    },
    setDetailLoading: (state, action) => {
      state.detail_loading = action.payload;
    },
    setConferences: (state, action) => {
      state.conferences = action.payload;
    },
    setConferenceDetail: (state, action) => {
      state.conference_detail = action.payload;
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
    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },
    setFeedback: (state, action) => {
      state.feedback = action.payload;
    },
    setMainPostLoading: (state, action) => {
      state.main_post_loading = action.payload;
    },
  },
});

export const {
  setMainLoading,
  setListLoading,
  setDetailLoading,
  setConferences,
  setConferenceDetail,
  setWorkshops,
  setSingleWorkshop,
  setGallery,
  setExhibition,
  setSpeakers,
  setFavourites,
  setFeedback,
  setMainPostLoading,
} = mainSlice.actions;

export default mainSlice.reducer;

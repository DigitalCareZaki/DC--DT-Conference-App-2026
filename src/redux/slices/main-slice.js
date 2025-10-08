import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  main_loading: false,
  list_loading: false,
  detail_loading: false,
  favourite_loading: false,
  conferences: null,
  conference_detail: null,
  workshops: null,
  workshop_detail: null,
  gallery: null,
  exhibition: null,
  speakers: [],
  favourites: null,
  feedback: null,
  main_post_loading: false,
  selected_item_index: null,
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
    setFavouriteLoading: (state, action) => {
      state.favourite_loading = action.payload;
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
    setWorkshopDetail: (state, action) => {
      state.workshop_detail = action.payload;
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
    setSelectedItemIndex: (state, action) => {
      state.selected_item_index = action.payload;
    },
  },
});

export const {
  setMainLoading,
  setListLoading,
  setDetailLoading,
  setFavouriteLoading,
  setConferences,
  setConferenceDetail,
  setWorkshops,
  setWorkshopDetail,
  setGallery,
  setExhibition,
  setSpeakers,
  setFavourites,
  setFeedback,
  setMainPostLoading,
  setSelectedItemIndex,
} = mainSlice.actions;

export default mainSlice.reducer;

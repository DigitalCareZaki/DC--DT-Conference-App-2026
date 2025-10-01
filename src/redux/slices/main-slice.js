import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    cart_data: [],
    street: null,
    house_number: null,
    other_address: null,
    area: null,
    home_data: [],
    categories: [],
    general_settings: null,
    longlat:null

};

export const constantSlice = createSlice({
    name: 'constant',
    initialState,

    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setCartData: (state, action) => {
            state.cart_data = action.payload;
        },
        setStreet: (state, action) => {
            state.street = action.payload;
        },
        setHouseNumber: (state, action) => {
            state.house_number = action.payload;
        },
        setOtherAddress: (state, action) => {
            state.other_address = action.payload;
        },
        setArea: (state, action) => {
            state.area = action.payload;
        },
        setHomeData: (state, action) => {
            state.home_data = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setGeneralSettings: (state, action) => {
            state.general_settings = action.payload;
        },
        setLongLat: (state, action) => {
            state.longlat = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUser,
    setCartData,
    setStreet,
    setHouseNumber,
    setOtherAddress,
    setArea,
    setHomeData,
    setCategories,
    setGeneralSettings,
    setLongLat

} = constantSlice.actions;

export default constantSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    order_loading: false,
    orders: [],
    order_details: null,
    more_order: false,
    latest_order:null
};

export const orderSlice = createSlice({
    name: 'order',
    initialState,

    reducers: {
        setOrderLoading: (state, action) => {
            state.order_loading = action.payload;
        },
        setOrders: (state, action) => {
            state.orders = action.payload;
        },
        setOrderDetails: (state, action) => {
            state.order_details = action.payload;
        },
        setMoreOrder: (state, action) => {
            state.more_order = action.payload;
        },
        setLatestOrder: (state, action) => {
            state.latest_order = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setOrderLoading,
    setOrders,
    setOrderDetails,
    setMoreOrder,
    setLatestOrder
} = orderSlice.actions;

export default orderSlice.reducer;

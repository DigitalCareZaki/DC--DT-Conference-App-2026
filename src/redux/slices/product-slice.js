import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product_loading: false,
    product_detail: null,
    category_detail: null,
    category_loading:false
};

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setProductLoading: (state, action) => {
            state.product_loading = action.payload;
        },
        setProductDetail: (state, action) => {
            state.product_detail = action.payload;
        },
        setCategoryDetail: (state, action) => {
            state.category_detail = action.payload;
        },
        setCategoryLoading: (state, action) => {
            state.category_loading = action.payload;
        },

    },
});

// Action creators are generated for each case reducer function
export const {
    setProductLoading,
    setProducts,
    setProductDetail,
    setCategoryDetail,
    setCategoryLoading

} = productSlice.actions;

export default productSlice.reducer;

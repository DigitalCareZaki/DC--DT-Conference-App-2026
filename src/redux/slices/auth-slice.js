import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth_loading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        setAuthLoading: (state, action) => {
            state.auth_loading = action.payload;
        },


    },
});

// Action creators are generated for each case reducer function
export const { setAuthLoading } = authSlice.actions;

export default authSlice.reducer;

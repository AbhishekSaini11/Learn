import { createSlice } from "@reduxjs/toolkit";
const initialState: any = [];
const cartslice = createSlice({
    name: 'cart2',
    initialState,
    reducers: {
        addCartItem(state, action) {
            state.push(action.payload);
        },
        removeCartItem(state, action) {
            return state.filter((item, index) => index !== action.payload);
        },
    },


});
export const { addCartItem, removeCartItem }=cartslice.actions;
export default cartslice.reducer;
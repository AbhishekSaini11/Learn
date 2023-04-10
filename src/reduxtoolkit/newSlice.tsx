import { createSlice } from "@reduxjs/toolkit";
const initialState: any = [];
const newSlice = createSlice({
    name: 'NEW',
    initialState,
    reducers: {
        addNweProduct(state, action) {
            let myindex = -1
            state.map((item:any, index:any) => {
                if (item.id == action.payload.id) {
                    myindex = index;
                }

            });
            if (myindex == -1) {
                state.push({
                    category: action.payload.category,
                    description: action.payload.description,
                    id: action.payload.id,
                    image: action.payload.image,
                    price: action.payload.price,
                    qty: action.payload.qty + 1,
                    rating: action.payload.rating,
                    title: action.payload.title
                });
            } else {
                state[myindex].qty = state[myindex].qty + 1;
            }

        },
        removeCart(state, action) {
            return state.filter((item: any, index: any) => index !== action.payload);
        },
        removeCartWithMinus(state, action) {
            let myindex = -1
            state.map((item:any, index:any) => {
                if (item.id == action.payload.id) {
                    myindex = index;
                }

            });
            if (myindex == -1) {
            }
            else {
                state[myindex].qty = state[myindex].qty - 1;
            }


        }

    }
});
export const { addNweProduct, removeCart, removeCartWithMinus } = newSlice.actions;
export default newSlice.reducer;
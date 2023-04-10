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
            return state.filter((item: any, index: any) => index !== action.payload);
        },
        addNweProduct1(state, action) {
            let myindex = -1
            state.map((item:any, index:any) => {
                if (item.id == action.payload) {
                    myindex = index;
                }

            });
            if(myindex==-1){

            }else{
                state[myindex].qty = state[myindex].qty + 1;
            }
    },
    removeCartWithMinus2(state, action) {
       
        let myindex = -1
        state.map((item:any, index:any) => {
            if (item.id == action.payload) {
                myindex = index;
            }

        });
        if(myindex==-1){

        }else{
            state[myindex].qty = state[myindex].qty -1;
        }
    }
    }

});
export const { addCartItem, removeCartItem,addNweProduct1,removeCartWithMinus2 }=cartslice.actions;
export default cartslice.reducer;
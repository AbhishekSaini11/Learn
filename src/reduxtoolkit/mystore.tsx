import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartslice'
import NewReducer from './newSlice'
const mystore=configureStore({
   reducer:{
    cart:cartReducer,
    new1:NewReducer,
   }
});
export default mystore;
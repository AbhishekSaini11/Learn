import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartslice'
const mystore=configureStore({
   reducer:{
    cart:cartReducer,
   }
});
export default mystore;
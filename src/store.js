import { configureStore } from "@reduxjs/toolkit";
import userReducer from './faetures/user/userSlice'
import cartReducer from './faetures/cart/cartSlice'
const store = configureStore({
    reducer:{
        user:userReducer,
        cart : cartReducer,
    },
});
export default store;
import { configureStore } from "@reduxjs/toolkit";
// import {userReducer} from "./features/user/UserSlice"
import cartReducer from "./features/cart/CartSlice"
import userReducer from "./features/user/UserSlice";

const store = configureStore({
    reducer : {
        
        cart : cartReducer ,
        user : userReducer
    }
})

export default store;
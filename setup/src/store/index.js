//This is the connection store, all below is boilerplate code

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";





const store = configureStore({
    reducer:{
        cartReducer//the same name speciied in slice function has to be used with reducer at end
    }
})

  export default store;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";





const store = configureStore({
    reducer:{
        cartReducer//the same name speciied in slice function has to be used with reducer at end
    }
})

  export default store;
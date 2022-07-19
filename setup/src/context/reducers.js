import { CartState } from "./Context";

export const cartReducer = (state, action) => {
    
    switch (action.type) {
        case 'ADD_TO_CART':
            return {cart:[...state.cart,{...action.payload,qty:1}]}
    
        default:
            return state
    }
}

export const filterReducer = (state,action)=>{
    console.log(state)
    switch (action.type) {
        case 'NO_FILTERS':
            
            return {transformProducts:state.prod}
        
    
        default:
           return state;
    }
}
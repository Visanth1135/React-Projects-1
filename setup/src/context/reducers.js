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
    console.log(action.payload)
    switch (action.type) {
        case 'NO_FILTERS':
            return {products:action.payload}
        case 'FAST_DELIVERY': 
            return {products:action.payload.filter((p)=>p.fastDelivery==true)}
    
        default:
           return state;
    }
}
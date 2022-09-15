import { createSlice , current} from "@reduxjs/toolkit";



const cartSlice = createSlice({
    
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: {},
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push({...action.payload,qty:1})
      state.total += action.payload.price * state.products.qty;
    },
    clearCart: (state)=>{state.products=[]},
    removeItem: (state,action)=>{
      const itemId = action.payload;
      state.products=state.products.filter((item)=>item.id!==itemId)
    },
    increase: (state,action)=>{
      const itemId = action.payload;
      const cartItem = state.products.find((item)=>item.id===itemId)
      cartItem.qty=cartItem.qty+1;
    },
    decrease: (state,action)=>{
      const itemId = action.payload;
      const cartItem = state.products.find((item)=>item.id===itemId)
      cartItem.qty=cartItem.qty-1;

    },
    calcTotals:(state)=>{
      console.log('reach')
      let amount = 0;
      state.total=0;
      state.products.forEach((item)=>{
        amount=item.qty * item.price
        state.total=state.total+amount
        
      })
    }
  },
});

export const { addProduct, clearCart, removeItem, increase, decrease, calcTotals} = cartSlice.actions;
export default cartSlice.reducer;
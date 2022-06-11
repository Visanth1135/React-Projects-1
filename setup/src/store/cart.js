import { createSlice} from '@reduxjs/toolkit'
import cartItems from '../components/cartItems'

// initialstate is place where we set initial value os all states
const initialState={
  cartitems:cartItems,
  amount:cartItems.length,
  total:0,
  isLoading:true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state)=>{state.cartitems=[]},
    removeItem: (state,action)=>{
      const itemId = action.payload;
      state.cartitems=state.cartitems.filter((item)=>item.id!==itemId)
      state.amount=state.amount-1
    },
    increase: (state,action)=>{
      const itemId = action.payload;
      const cartItem = state.cartitems.find((item)=>item.id===itemId)
      cartItem.amount=cartItem.amount+1

    },
    decrease: (state,action)=>{
      const itemId = action.payload;
      const cartItem = state.cartitems.find((item)=>item.id===itemId)
      cartItem.amount=cartItem.amount-1

    },
    calcTotals:(state)=>{
      console.log('reach')
      let amount = 0;
      state.total=0;
      state.cartitems.forEach((item)=>{
        amount=item.amount * item.price
        state.total=state.total+amount
        
      })
    }
  },
})


// Action creators are generated for each case reducer function

console.log(cartSlice.reducer)
export const {clearCart, removeItem, increase, decrease, calcTotals} = cartSlice.actions

export default cartSlice.reducer
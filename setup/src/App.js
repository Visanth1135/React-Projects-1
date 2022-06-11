import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import { calcTotals } from './store/cart'




const App = () => {
const {cartitems, amount} = useSelector((store)=>store.cartReducer)
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(calcTotals())
  },[cartitems])
  return (
    <div>
      <h1>{amount}</h1>
      <CartContainer/>
    </div>
  )
}

export default App
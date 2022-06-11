import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, calcTotals } from '../store/cart';
import CartItem from './CartItem'


const CartContainer = () => {
  const {cartitems, total, amount} = useSelector((store)=>store.cartReducer)
  console.log(cartitems)
  const dispatch=useDispatch()
  if(amount<1){
    return <h2>YOur cart is empty</h2>
}
return(
  <section>
  <div>
  {cartitems.map((item)=>
    <CartItem key={item.id} {...item}/>
    )}
    </div>
    <footer>
    <h3>{total}</h3>
    <button onClick={()=>dispatch(clearCart())}>Clearcart</button>
    </footer>
    </section>
)
}

export default CartContainer
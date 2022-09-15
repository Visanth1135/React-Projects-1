import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { calcTotals } from "../redux/CartRedux";
import StripeCheckout from 'react-stripe-checkout'



import CartItem from '../components/CartItem'
const KEY = process.env.REACT_APP_STRIPE

const Cart = () => {
   const [stripeToken, setStripeToken]=useState(null) 
  const {products, total} = useSelector((store)=>store.cartReducer)
  const amount=JSON.stringify(total)
  console.log(JSON.stringify(products),amount)
  const dispatch=useDispatch()
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken)
  const navigate=useNavigate()
  useEffect(() => {
    const makeRequest = async () => {
      try {
          const res = await axios.post("http://localhost:8000/payment", {
              tokenId: stripeToken.id,
              amount: total*100,
            });
        console.log('reached')
        navigate("/success", {
          stripeData: res.data,
          });
      } catch {
      }

      }
      stripeToken && makeRequest();
    
  }, [stripeToken]);
  useEffect(()=>{
    dispatch(calcTotals())
  },[products])
  
return(
  <section className='m-3'>
  <div className='d-flex justify-content-between' >
  {products.map((item)=>
    <CartItem key={item.id} {...item}/>
    )}
    </div>
    <div className='d-flex pos'>
    <h3 >Total:{total}</h3>
    <button className='p-2'>Clearcart</button>
    

    <StripeCheckout
    amount={total*100}
    stripeKey={KEY}               
    token={onToken}>
    
    </StripeCheckout>
    </div>
    </section>
)
}

export default Cart
import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {
    const {filterstate:{ transformProducts },filterdispatch, products}=CartState();
    console.log('jjj'+transformProducts)
  return (
    <div>
    <div>
    <button onClick={()=>filterdispatch({
      type:'NO_FILTER'
    })}>No filter</button>
    <button onClick={()=>filterdispatch({
      type:'FAST_DELIVERY'
    })}>Fast delivery</button>
    </div>
    <div class='flex'>
    {products.map((prod)=>{
      return <SingleProduct prod={prod} key = {prod.id}/>
    })}
    </div>
    </div>
  )
}

export default Home
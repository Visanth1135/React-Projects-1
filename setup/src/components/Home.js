import React from 'react'
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';

const Home = () => {
    const {filterstate:{ products },filterdispatch, tproducts}=CartState();
    let prod=[]
    if (products.length===0) {prod=tproducts}
    else {prod=products}
    console.log(products)
  return (
    <div>
    <div>
    <button onClick={()=>filterdispatch({
      type:'NO_FILTER',
      payload:tproducts
    })}>No filter</button>
    <button onClick={()=>filterdispatch({
      type:'FAST_DELIVERY',
      payload:tproducts
    })}>Fast delivery</button>
    </div>
    <div class='flex'>

    {prod.map((p)=>{
      return <SingleProduct p={p} key = {p.id}/>
    })}
    </div>
    </div>
  )
}

export default Home
import React from 'react'
import SingleProduct from '../components/SIngleProduct';
import  {CartState}  from '../FilterSection/context';




const Home = () => {
    const {products, filterstate,filterdispatch}=CartState();
    
  return (
    
  
    <div class='products'>

    {products.map((p)=>{
      return <SingleProduct p={p} key = {p.id}/>
    })}
    </div>
    
  )
}

export default Home
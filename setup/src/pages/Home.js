import React from 'react'
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import SingleProduct from '../components/SIngleProduct';
import  {CartState}  from '../FilterSection/context';




const Home = () => {
    const {products, filterstate,filterdispatch}=CartState();
    console.log(products)
    
  return (
    
    <div>
    <Navbar/>
    <br/>
    <h2>Trending products</h2>
  
    <div className='products'>
    {products.map((p)=>
      
      <SingleProduct p={p}/>
    )}
    </div>
    <br/>
    <h2>Subcription Products</h2>

    
    </div>
    
    )
  }
  
export default Home
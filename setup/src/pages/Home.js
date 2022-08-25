import React from 'react'
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import SingleProduct from '../components/SIngleProduct';
import  {CartState}  from '../FilterSection/context';




const Home = () => {
    const {filterstate,filterdispatch}=CartState();
    console.log(filterstate)
    
  return (
    
    <div>
    <Navbar/>
    <div className='d-flex'>
    <div className='col-2'>
    <Filter/>
    </div>
    <div class=' col-10 products'>
    
    
    </div>
    </div>
    
    </div>
    )
  }
  
export default Home
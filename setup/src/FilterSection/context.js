import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { faker } from '@faker-js/faker';
import { filterReducer } from './reducer';
import axios from 'axios';


const Cart = createContext();

const Context = ({children}) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProducts(res.data);
      } catch {
        console.log('error')
      }
    };
    getProduct();
  }, []);
  const result = Object.values(products)
  console.log(products)


  const [ filterstate, filterdispatch] = useReducer(filterReducer, {
    products: products,
      filter:[],
      filteredProducts:[],
  });
console.log(filterstate)

  return (
    <Cart.Provider value={{ filterstate, filterdispatch}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = ()=> useContext(Cart);

export default Context;
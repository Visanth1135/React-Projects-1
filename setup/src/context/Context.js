import React, { createContext, useContext, useReducer, useState } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from './reducers';

const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {
  const tproducts = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.food(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  const [ filterstate, filterdispatch] = useReducer(filterReducer, {
    products: [],
  });

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });


  return (
    <Cart.Provider value={{ tproducts, state, dispatch, filterstate, filterdispatch}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = ()=> useContext(Cart);

export default Context
import React, { useState } from 'react'
import { CartState } from '../context/Context'


const Header = () => {
    const {Cartname} = CartState ()
    console.log(Cartname)
  return (
    <div>header</div>
  )
}

export default Header
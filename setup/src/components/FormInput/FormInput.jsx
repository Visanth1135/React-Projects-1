import React, { useState } from 'react'
import './FormInput.css'
const FormInput = ({input}) => {
    const obj = {};

 for (const i of input) {
      obj[i.name] = "";
 }
 const [focused, setFocused] = useState(false);
 const [value, setValue] = useState(obj)
 console.log(value)
    const handleFocus = (e) => {
        setFocused(true);
      };
  return (
    <div className='container'>
     <div className='formbox'>
     <h1>Register</h1>
     {input.map((i)=>{
        return (
            <div>
            <label>{i.name}</label><br/>
            <input type="email" 
            name={i.name}
            
            onChange={(e)=>{
                console.log(e.target.value)
                setValue({ ...value, [e.target.name]: e.target.value })}}
            onBlur={handleFocus}
            focused={focused.toString()}/>
            <span>Error message</span>
            </div>
        )
     })}
     <button>Submit</button>
     
     </div>
    </div>
  )
}

export default FormInput
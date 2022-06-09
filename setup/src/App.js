import React, {useReducer} from 'react'

const reducer = (state, action)=>{//state have values that are defined after reducer in line 12 and action have the function to be run when called
switch(action.type){
  case "Increment":
    return{count:state.count + 1, showText:false}
}
}

const App = () => {
  //usereducer is used when two or more usestate is used
  const [state, dispatch] = useReducer(reducer,
    {
      count:0,// initilizing the defalult value
      showText:true// count and showtext become the object of state
    } )
  return (
    <div>
    <h1>{state.count}</h1>
    <button onClick={()=>{dispatch({type:"Increment"})}}>+</button>
    {state.showText && <h3>This ts text</h3>}
    </div>
  )
}

export default App
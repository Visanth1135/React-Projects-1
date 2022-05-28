import React,{useState} from "react";


import Popup from "./popup";
import './style.css'


export default function App() {
const [trigger, setTrigger] = useState(false)

  return (
    <div className="App">
    <main>
      <h1>React Popups</h1>
      <br/> <br/>
      <button onClick={()=>setTrigger(true)} >Open Popup</button>
       <Popup modal={trigger} setModal = {setTrigger}/>
    </main>
  </div>

  )
  }
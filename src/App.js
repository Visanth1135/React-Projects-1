import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  const [name, setname] = useState('')
  return (
    <main>
    <section className='container'>
  <h1>
    Hello
    </h1>
    <List people={people}/>
    <input value = {name} type="text" onChange={(e)=>setname(e.target.value)}></input>
    <button onClick={() => setPeople([...people,name])} className='a'>Add</button>
    <button onClick={() => setPeople([])}>clear all</button>
    </section>
    </main>
    
  )
}

export default App;

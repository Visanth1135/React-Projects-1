import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';
import './style.css'
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState({
    first:'',
    last:''
  });
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){

    }
    else if(name && isEditing){

    }
    else {
      const newItem = {id:new Date().getTime().toString(), tfirst:name.first, tlast:name.last}
      console.log(newItem);
      setList([...list,newItem])
      setName({first:'',last:''})
    }
  }
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name.first}
            onChange={(e) => setName({...name,first:e.target.value})}
          />
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name.last}
            onChange={(e) => setName({...name,last:e.target.value})}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>

        </div>
      </form>
      <List items = {list}/>
    </section>
  );
}

export default App;
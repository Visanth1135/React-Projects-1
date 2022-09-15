import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CartContainer from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Sucess from './pages/Sucess';



const App = () => {
  return (  
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/signin" element={<SignIn/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/cart" element={<CartContainer/>} />
    <Route exact path="/success" element={<Sucess/>} />
    </Routes>
    </Router>
  );
}

export default App
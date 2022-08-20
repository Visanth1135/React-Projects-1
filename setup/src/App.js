import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignIn from './pages/SignIn';



const App = () => {
  return (  
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/signin" element={<SignIn/>} />
    <Route exact path="/login" element={<Login/>} />
    </Routes>
    </Router>
  );
}

export default App
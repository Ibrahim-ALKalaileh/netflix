import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';

function App() {
  const user = null;

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        //logged in
      } else {
        //logged out
      }
    })
  },[])

  return (
    <div className="app">
      
      <Router>
        {!user ? (<LoginScreen/>):
        <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
      </Routes>}
        
      </Router>
    </div>
  ); 
}

export default App;

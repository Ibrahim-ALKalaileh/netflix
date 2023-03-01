import React from 'react';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;

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

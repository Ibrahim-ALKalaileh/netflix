import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
   
  useEffect(()=>{

    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if (userAuth){
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //logged out
        dispatch(logout)
      }
    })
    // detatch the onAuthStateChanged Listener
    return unsubscribe;
  },[])

  return (
    <div className="app">
      
      <Router>
        {!user ? (
        <LoginScreen/>
        ): (
        <Routes>
        <Route exact path="/profile" element={<HomeScreen/>} />
        <Route exact path="/" element={<HomeScreen/>} />
        </Routes>
      )}
        
      </Router>
    </div>
  ); 
}

export default App;

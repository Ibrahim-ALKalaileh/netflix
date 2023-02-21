import react,{ useEffect, useState } from 'react'
import './Nav.css'
import logo from "../assets/img/logo.png"
import avatar from "../assets/img/avatar.png"
  
const Nav = () => {
const [show, handleShow]=useState(false);

const transitionNavBar =()=>{
  if (window.scrollY>100){
    handleShow(true);
  } else {
    handleShow(false);
  }
}

useEffect(()=>{
window.addEventListener("scroll",transitionNavBar);
return ()=> window.removeEventListener("scroll",transitionNavBar);
},[])

  return (
    <div className={`nav ${show && `nav__black`}`}>

      <div className='nav__contents'>

      
        <img src={logo} alt="" className='nav__logo'/>

        <img src={avatar} alt='' className='nav__avatar'/>
    
      </div>

    </div>
  )
}

export default Nav
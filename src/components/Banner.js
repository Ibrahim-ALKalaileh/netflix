import React from 'react'
import './Banner.css'
import banner from '../assets/img/Banner.jpg'

function Banner() {
  return (
    <div className='banner' style={{
        backgroundSize:"cover",
        backgroundImage:`url(${banner})`,
        backgroundPosition:"center center"
    }}>
        
    </div>
  )
}

export default Banner
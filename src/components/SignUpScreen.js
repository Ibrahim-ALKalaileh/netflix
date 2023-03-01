import React from 'react'
import './SignUpScreen.css'

function SignUpScreen() {
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type="Email"/>
        <input placeholder='Password' type="password"/>
        <button type='submit'>Sign In</button>
        <h4></h4>
      </form>
    </div>
  )
}

export default SignUpScreen
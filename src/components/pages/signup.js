import React from 'react'
import './signup.css'

function signup() {

    const loginToApp =()=>{}
    const regitsterToApp =()=>{}

  return (
    <div className='signUpForm'>
        <h2>Make the most of your professional life</h2>
        <label for="txtEmail">Email</label>
        <input type="text" id='txtEmail' placeholder='Enter email'></input>       

           <label for="txtPassword">Password</label>
        <input type="password" id='txtPassword' placeholder='Enter password'></input> 
        <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>     
        <button>Agree & Join</button>

        <span className='signIn'>Signin</span>
    </div>
  )
}

export default signup
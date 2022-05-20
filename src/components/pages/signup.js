import React, { useState } from 'react'
import './signup.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import firebase from "firebase/app";
function Signup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
const [profilePic, setProfilePic] = useState("")



    const loginToApp =()=>{
      alert('log')
    }
    const regitsterToApp =(e)=>{
      e.preventDefault()
      if(!email) return alert('please enter email id')
      if(!password) return alert('please enter the password')

      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)

        // ..
      });

    }

  return (
    <div className='signUpForm'>
      <form>
        <h2>Make the most of your professional life</h2>
        <label for="txtFullName">Full Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id='txtFullName' placeholder='Full Name'></input> 
        <label for="txtProfPic">Profile Pic URL</label>
        <input type="text" id='txtProfPic'  value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder='Profile Pic URL'></input> 
        <label for="txtEmail">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='txtEmail' placeholder='Enter email'></input>       

           <label for="txtPassword">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id='txtPassword' placeholder='Enter password'></input> 
        <p>By clicking Agree & Join, you agree to the LinkedIn User Agreement, Privacy Policy, and Cookie Policy.</p>     
        <button onClick={regitsterToApp}>Agree & Join</button>

        <span className='signIn' onClick={loginToApp}>Signin</span>
        </form>
    </div>
    
  )
}

export default Signup
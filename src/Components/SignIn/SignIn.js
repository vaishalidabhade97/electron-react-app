import React from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
const SignIn = () => {
   const navigate = useNavigate()
    
    const handleSubmit = () => {
     navigate('/')
    }
    return (
        <div className='container'>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-body'>
               <div className='email'>
                  <input className='form_input' type='email' id='email' placeholder='Email' required/>
               </div>
               <div className='password'>
                  <input className='form_input' type='password' id='password' placeholder='Password' required/>
               </div>
            </div>
            <div className='footer'>
                <button type='submit' className='submit' >Sign In</button>
            </div>
            <br />
            <div className='footer'>
               <span>New User? </span>
                <Link to='/signup' color='#cd6948' style={{textDecorationColor: '#cd6948', color: '#cd6948'}}>Sign Up</Link>
            </div>
          </form>
        </div>
    )
}

export default SignIn
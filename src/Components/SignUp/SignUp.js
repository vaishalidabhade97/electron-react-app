import React from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import { writeUserData } from '../../utils/helpers'

const SignUp = () => {
   const navigate = useNavigate()
    
    const handleSubmit = () => {
   //   writeUserData("VD", "vaishali", "v@gmail.com", "v@123")
     navigate('/signin')
    }
    return (
        <div className='container'>
          <h1>Create New User</h1>
          <form onSubmit={handleSubmit}>
            <div className='form-body'>
               <div className='username'>
                  <input className='form_input' type='text' id='userName' placeholder='User Name' required/>
               </div>
               <div className='email'>
                  <input className='form_input' type='email' id='email' placeholder='Email' required/>
               </div>
               <div className='password'>
                  <input className='form_input' type='password' id='password' placeholder='Password' required/>
               </div>
            </div>
            <div className='footer'>
                <button type='submit' className='submit' >Sign Up</button>
            </div>
            <br />
            <div className='footer'>
               <span>Already Existing User? </span>
                <Link to='/signin' color='#cd6948' style={{textDecorationColor: '#cd6948', color: '#cd6948'}}>Sign In</Link>
            </div>
          </form>
        </div>
    )
}

export default SignUp
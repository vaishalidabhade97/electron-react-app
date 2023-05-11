import React from 'react'
import './SignUp.css'
const SignUp = () => {
    
    const handleSubmit = () => {
     console.info("ss")
    }
    console.log("pppp")
    return (
        <div className='container'>
          <h1>Create New User</h1>
          <form>
            <div className='form-body'>
               <div className='username'>
                  {/* <label className='form_label' htmlFor='userName'>User Name</label><br /> */}
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
                <button type='submit' className='submit' onClick={handleSubmit}>Sign Up</button>
            </div>
          </form>
        </div>
    )
}

export default SignUp
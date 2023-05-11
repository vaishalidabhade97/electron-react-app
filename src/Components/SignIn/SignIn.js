import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <div className='container'>
      <div>
        Welcome to Sign In11!!
        <Link to="/signup" className="link">Sign Up</Link>
      </div>
    </div>
  )
}

export default SignIn
import { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { Spinner } from 'react-activity'
import 'react-activity/dist/library.css'
// import { Spinner } from 'react-bootstrap'
const Profile = () => {
  const [data, updateData] = useState()
  const getProfile = () => {
    axios.get('https://api.github.com/users/mapbox').then((response) => {
      updateData(response.data)
    })
  }
  useEffect(() => {
   getProfile()
  }, [])
  return (
    <div>
      <center><h1 style={{marginTop: 40}}>My Profile</h1></center>
      <div className='profile'>
        {
          data ? (
            <>
              <div>
                <span>Name:- </span>
                <span>{data?.name}</span>
              </div>
              <div>
                <span>Blog:- </span>
                <span>{data?.blog}</span>
              </div>
              <div>
                <span>Followers:- </span>
                <span>{data?.followers}</span>
              </div>
            </>
          ) : (
            <div className='spinner'>
              <center><Spinner color='#cd6948' /></center>
            </div>
            
          )
        }
      </div>
    </div>
  )
}

export default Profile
import React from 'react'
import { useAuth } from './Auth'

export const Profile = () => {
    const auth =useAuth()
    const handaleLogout=()=>{
        auth.logout()
    }
  return (
    <div>
        <h2>This is Profile page</h2>
        <h3> The current user is: {auth.user}</h3>
        <button onClick={handaleLogout}>Logout</button>
    </div>
  )
}

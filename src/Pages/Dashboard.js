import React, {useState, useEffect} from 'react'

import Login from './Login'
import useLogin from '../Hooks/useLogin'

const Dashboard = () => {
  
  //Check loggedIn
  const {clientLoggedIn} = useLogin()
  
  return (
    <div>
      {(clientLoggedIn != false) ? (
      
      <h5>Dashboard</h5>

      ) : (
        <Login />
      )}
    </div>
  )
}
export default Dashboard
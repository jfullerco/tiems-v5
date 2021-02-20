import React, {useState, useEffect, useContext} from 'react'
import {StateContext} from '../stateContext'
import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  
  return (
    <div>
      {(user.clientLoggedIn != false) ? (
        <div>
          <h5>Dashboard</h5>
          <button 
            onClick={()=>user.setClientLoggedIn(!user.clientLoggedIn)}
            value="Logout"
          /> 
        </div>
      ) : (
        <div><Login />
        <button 
            onClick={()=>user.setClientLoggedIn(!user.clientLoggedIn)}
            value="Login"
          /> </div>
      )}
    </div>
  )
}

export default Dashboard
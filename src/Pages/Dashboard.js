import React, {useState, useEffect, useContext} from 'react'
import {StateContext} from '../stateContext'
import Login from './Login'

const Dashboard = () => {

  const {loginState, updateLoginState} = useContext(StateContext)
  
  return (
    <div>
      {(loginState.clientLoggedIn != false) ? (
        <div>
          <h5>Dashboard</h5>
          <button 
            onClick={()=>updateLoginState}
            value="Logout"
          /> 
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}
export default Dashboard
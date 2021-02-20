import React, {useState, useEffect, useContext} from 'react'
import {StateContext} from '../stateContext'
import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  
  return (
    
    <div>
      
      {(user.clientLoggedIn != false) ? (
        <div className="row">
          <div className="two columns">  
            <h5>Dashboard</h5> 
          </div>
          
          <div className="one column">  
          <button 
            onClick={()=>user.setClientLoggedIn(!user.clientLoggedIn)} 
            > Logout 
            </button>
          </div>
        
        </div>

      ) : (
        
        <Login />
        
      )}
    </div>
  )
}

export default Dashboard
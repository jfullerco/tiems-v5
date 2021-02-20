import React, {useState, useEffect, useContext} from 'react'
import {Route, Link} from 'react-router-dom'
import {StateContext} from '../stateContext'

import Login from './Login'
import SiteList from './Sites/SiteList'

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
        <p />
        <div className="row">
          <Route path="/sites" component={SiteList} />
          <Link to="/sites" className="button">Sites</Link>
        </div>

        </div>

      ) : (
        
        <Login />
        
      )}
    </div>
  )
}

export default Dashboard
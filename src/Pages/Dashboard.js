import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {StateContext} from '../stateContext'

import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  
  return (  
    <>  
      {(user.clientLoggedIn != false) ? (  
      <>

        <div className="row">
          
          <div className="two columns">  
            <h5><Link to="/">Dashboard</Link></h5> 
          </div>
          
          <div className="one column">  
            <button 
              onClick={()=>user.setClientLoggedIn(!user.clientLoggedIn)} 
              > Logout 
              </button>
          </div>

        </div>

        <div className="row">
          
          <div className="two columns">
            <Switch>
              <Link to="/sites">Sites</Link>
            </Switch>
          </div>

        </div>
      </>

      ) : (
        
        <Login />
        
      )}
  </>
  )
}

export default Dashboard
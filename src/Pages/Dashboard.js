import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {StateContext, saveMe} from '../stateContext'

import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  
  console.log(localStorage)
  return (  
    <>  
      {(user.clientLoggedIn != false && localStorage.LoggedIn != false) ? (  
      <>

        <div className="row">
          
          <div className="two columns">  
            <h5><Link to="/">Dashboard</Link></h5> 
          </div>
          
          <div className="one column">  
            <button 
              onClick={()=>(user.setClientLoggedIn(!user.clientLoggedIn), localStorage.setItem('LoggedIn', false))} 
              > Logout 
              </button>
          </div>

        </div>

        <div className="row">
          
          <div className="two columns">
            <Switch>
              <Link to="/sites"><button>Sites</button></Link>
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
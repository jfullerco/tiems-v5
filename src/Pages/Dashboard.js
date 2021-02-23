import React, {useState, useEffect, useContext, useRef} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {StateContext, saveMe} from '../stateContext'
import getClient from '../Services/clientService'

import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  const clientID = localStorage.clientID
  
  useEffect(() => {
     
     getSession(clientID)
     
     
  }, [user])

console.log(clientID)
console.log(user.sessionData)
  const getSession = (clientID) => {
    
    const {data} = getClient(clientID)
    user.setSessionData()
    
  }

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
              onClick={()=>(user.setClientLoggedIn(!user.clientLoggedIn))} 
              > Logout 
              </button>
          </div>

        </div>

        <div className="row">
          
          <div className="three columns">
            <Switch>
              <Link to="/sites"><button>Sites</button></Link>
            </Switch>
            <button onClick={getSession}>test</button>
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
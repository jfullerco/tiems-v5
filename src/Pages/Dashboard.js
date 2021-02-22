import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {StateContext, saveMe} from '../stateContext'
import getClient from '../Services/clientService'

import Login from './Login'

const Dashboard = () => {
  
  const user = useContext(StateContext)
  const {clientID} = user.sessionData
  
  useEffect(() => {
     getSession(clientID)
  }, [])
  
  const getSession = async (clientID) => {
    const {data} = await getClient(clientID)
    user.setSessionData({...user.sessionData, data})
    console.log(user.sessionData)
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
          
          <div className="two columns">
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
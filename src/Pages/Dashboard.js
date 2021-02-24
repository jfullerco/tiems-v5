import React, {useState, useEffect, useContext} from 'react'
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'
import getClient from '../Services/clientService'

import Login from './Login'

const Dashboard = () => {
  
  const userContext = useContext(stateContext)
  const clientID = localStorage.clientID
  
  useEffect(() => {
     
     getSession(clientID)
     
  }, [])

  const getSession = async (clientID) => {
    
    const {data} = await getClient(clientID)
    userContext.setSessionData({
      client_name: data.client_name,
      sites: data.sites,
      _id: data._id
    })
    
  }
console.log(userContext.sessionData)
  return (  
    <>  
      {(userContext.clientLoggedIn != false && localStorage.LoggedIn != false) ? (  
      <>
        <div className="row">
          
          <div className="two columns">  
            <h5><Link to="/">Dashboard</Link></h5> 
          </div>
          
          <div className="one column">  
            <button 
              onClick={()=>(userContext.setClientLoggedIn(!user.clientLoggedIn))} 
              > Logout 
              </button>
          </div>

        </div>

        <div className="row">
          
          <div className="three columns">
            <Switch>
              <div className="row"><Link to="/sites"><button>Sites</button></Link></div>
            </Switch>
            <button onClick={getSession}>test</button>
          </div>

        </div>
      </>

      ) : (
        
        <Redirect to="/login" />
        
      )}
  </>
  )
}

export default Dashboard
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
      {(localStorage.LoggedIn != null) ? (  
      <>
        <div className="row">
          
          <div className="two columns">  
            <h5><Link to="/">Dashboard</Link></h5> 
          </div>
          
          <div className="one column">  
            <button 
              onClick={()=>(userContext.setClientLoggedIn(!userContext.clientLoggedIn))} 
              > Logout 
            </button>
          </div>
          
        </div>

        <div className="row">
          <div className="four columns">
            <Switch>
              <span>
                <Link to="/sites">
                  <div className="button">
                    Sites
                    </div>
                </Link>
              </span>
            </Switch>
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
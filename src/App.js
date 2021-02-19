import React, {useState, useEffect, useContext} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {stateContext, stateProvider} from './stateContext'
//import {useStateStore} from './test'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'


import "./style.css"

export default function App() {
  //const clientLoggedIn = true
  //const clientID = 99999
  //const [stateStore, handleChange] = useStateStore()
  
  const {stateStore} = useContext(stateContext)
  
  return (
    
    <Router>
      <stateProvider> 
      <div className="container"> 
      <button onClick={()=>handleChange({clientLoggedIn, clientID})}>click me</button>
      <h5>TIEMS</h5>
      
      <Dashboard  />
      
      </div>
    </stateProvider>
    </Router>

  );
}

import React, {useState, useEffect, useContext} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import {StateProvider, StateContext} from './stateContext'
//import {useStateStore} from './test'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'


import "./style.css"

export default function App() {
  //const clientLoggedIn = true
  //const clientID = 99999
  //const [stateStore, handleChange] = useStateStore()
  

  return (
    <StateProvider>
    <Router>
       
      <div className="container"> 
      
      <h5>TIEMS</h5>
      
      <Dashboard  />
      
      </div>
    
    </Router>
</StateProvider>
  );
}

import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import useStateStore from './test'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'

import "./style.css"

export default function App() {
  const a = "true"
  const {stateStore} = useStateStore()
  
  const handleChange = useStateStore()

  console.log(handleChange) 
    console.log(stateStore)
  
  
  return (
    <Router>
      
      <div className="container"> 
      <button onClick={a=>handleChange(a)}>click me</button>
      <h5>TIEMS</h5>

      <Dashboard />
    
      </div>

    </Router>
  );
}

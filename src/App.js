import React, {useState, useEffect} from "react";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'

import "./style.css";



export default function App() {
  
  return (
    
    <div className="container">
      <h5>TIEMS</h5>
      <Login />
    </div>
   
  );
}

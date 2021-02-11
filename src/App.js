import React, {useState, useEffect, useContext} from "react";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {tiemsContext} from './tiemsContext'

import "./style.css";

export default function App(props) {
  
console.log(pageContext)
  return (
    <tiemsContext.Provider value={}>
    <div className="container">
      <h5>TIEMS</h5>
      
    </div>
    </tiemsContext.Provider>
  );
}

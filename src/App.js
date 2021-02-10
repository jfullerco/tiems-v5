import React, {useState, useEffect} from "react";
import Login from './Components/Login'
import useLogin from './Hooks/useLogin'
import useNavigator from './Hooks/useNavigator'
import Dashboard from './Components/Dashboard'

import "./style.css";


export default function App(props) {

  const {clientLoggedIn} = useLogin()
  const navHook = useNavigator()
  
  

  return (

    <div className="container">
      <h5>TIEMS</h5>
      {clientLoggedIn}
      {clientLoggedIn != false ? (
       "logged In"
      ) : (
        <Login />
      )}
    </div>

  );
}

import React, {useState, useEffect, useContext} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {StateProvider, StateContext} from './stateContext'

import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SiteList from './Pages/Sites/SiteList'

import "./style.css"

export default function App() {
  
  const user = useContext(StateContext)
  
  return (
    <StateProvider>
       
      <div className="container"> 
      
        <h5>TIEMS</h5>

        <Router>
          <Switch>
            
            <Route exact path="/"  component={Dashboard} />
            <Route path="/sites" component={SiteList} />

          </Switch>
        </Router>  

      </div>
    
    </StateProvider>
  );
}

import React, {useState, useEffect, useContext} from 'react'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {StateProvider, stateContext} from './stateContext'

import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import AddSite from './Pages/Sites/AddSite'
import SiteList from './Pages/Sites/SiteList'
import SiteDetail from './Pages/Sites/SiteDetail'

import LogoutButton from './Components/LogoutButton'

import "./style.css"

export default function App() {
  
  const user = useContext(stateContext)
  
  return (
    <StateProvider>
      <Router>
      <div className="container"> 
      <div className="row">
        <div className="u-pull-left"><h6>TIEMS</h6></div>
        <div className="u-pull-right"><LogoutButton /></div>
      </div>
          <Switch>
            
            <Route exact path="/"  component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route exact path="/sites" component={SiteList} />
            <Route path="/sites/:id" component={SiteDetail} />
            <Route path="/addSite/:id" component={AddSite} />

          </Switch>
          

      </div>
    </Router>
    </StateProvider>
  );
}

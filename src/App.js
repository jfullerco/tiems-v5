import React, {useState, useEffect} from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'

import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

import "./style.css"

export default function App() {


  return (
    <Router>
      
      <div className="container"> 
      
      <h5>TIEMS</h5>
      
      <Route exact path="/" component={Login} />
      
      <Route path="/" component={Dashboard} />
    
      </div>

    </Router>
  );
}

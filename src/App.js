import React, {useState, useEffect} from 'react'


import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'

import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'

import "./style.css"


const queryClient = new QueryClient()

export default function App() {


  return (
    <div className="container">
      <h5>TIEMS</h5>

    <QueryClientProvider client={queryClient}>  
        
        <Login />
        
    </QueryClientProvider>    
      
    </div>
   
  );
}

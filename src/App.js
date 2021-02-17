import React, {useState, useEffect} from "react";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'


import "./style.css";
import Test from './test'

const queryClient = new QueryClient()

export default function App() {
  
  const Link = (trigger => {
    return <div> {props.children} </div>
  }) => {
    return {trigger}
     
  }


  return (
    <div className="container">
      <h5>TIEMS</h5>

    <QueryClientProvider client={queryClient}>  
        
        <Login />
        <Link onClick={} >Test</Link>
    </QueryClientProvider>    
      
    </div>
   
  );
}

import React, {useState, useEffect} from "react";
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import ClientList from './Components/Client/ClientList'

import "./style.css";


export default function App() {
  const {status, data, isFetching, error} = useQuery('client', Login)
  return (
    <div className="container">
      <h5>TIEMS</h5>
      
        <Login />
        <ClientList/>
      
    </div>
   
  );
}

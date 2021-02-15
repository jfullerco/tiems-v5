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

const queryClient = new QueryClient()


export default function App() {
  
  return (
    <div className="container">
      <h5>TIEMS</h5>
      <QueryClientProvider value={queryClient}>
        <Login />
        <ClientList/>
      </QueryClientProvider>
    </div>
   
  );
}

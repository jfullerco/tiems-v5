import React, {useState, useEffect} from 'react'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import {clientLoggedIn} from '../../Hooks/useLogin'
import getClient from '../Services/clientService'

const Dashboard = () => {
  
  const {isLoading, isError, data, error} = useQuery('client', getClient)
  
  if (isLoading) {
    return <span> Loading...</span>
  }

  if (isError) {
    return <span>Error Loading: {error.message}</span>
  }

  return (
    <div>
      <h5>Dashboard</h5>

      Hello {data.client_name}
    </div>
  )
}
export default Dashboard
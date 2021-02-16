import React, {useState, useEffect} from 'react'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import {clientLoggedIn} from '../../Hooks/useLogin'
import getClient from '../../Services/clientService'

const Dashboard = () => {
  const {status, data, isFetching, error} = useQuery('client', getClient)
  return (
    <div>
      <h5>Dashboard</h5>
    </div>
  )
}
export default Dashboard
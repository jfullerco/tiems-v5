import React from 'react'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import {getClient} from '../Services/clientService'

const ClientList = () => {
  const queryClient = useQueryClient
  const query = useQuery('clients', getClient)
  console.log(query)
  return (

    <div>
    {query.data.map(client => (
      <div>test</div> 
    ))}
    </div>
  )

}
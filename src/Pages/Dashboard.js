import React, {useState, useEffect} from 'react'

import Login from './Login'
import useLogin from '../Hooks/useLogin'

const Dashboard = ({session}) => {

  const [loggedIn, setLoggedIn] = useState(false)

  
  return (
    <div>
      {(loggedIn != false) ? (
      <div>
      <h5>Dashboard</h5>
      <button onClick={handleLogout}> logout </button>
      </div>

      ) : (
        <Login session={session} />
      )}
    </div>
  )
}
export default Dashboard
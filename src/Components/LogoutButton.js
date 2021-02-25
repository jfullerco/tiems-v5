import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <>
    <button>
      <Link to="/">Dashboard</Link>
    </button>
    <button 
      onClick={()=>(userContext.setClientLoggedIn(!userContext.clientLoggedIn))} 
      > Logout 
    </button>
    </>
  )
}
export default LogoutButton
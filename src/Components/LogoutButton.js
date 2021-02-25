import React from 'react'
import {stateContext} from '../../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <button 
      onClick={()=>(userContext.setClientLoggedIn(!userContext.clientLoggedIn))} 
      > Logout 
    </button>
  )
}
export default LogoutButton
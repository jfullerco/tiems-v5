import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <div className="navBtn">
    <button>
      <Link to="/">Dashboard</Link>
    </button>
    <button 
      onClick={()=>(console.log(localStorage))} 
      > Logout 
    </button>
    </div>
  )
}
export default LogoutButton
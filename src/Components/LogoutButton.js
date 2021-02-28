import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <div className="navBtn">
    
    <h6>  <Link to="/">Dashboard</Link> </h6>
    
    </div>
  )
}
export default LogoutButton
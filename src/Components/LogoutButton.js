import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import {stateContext} from '../stateContext'

const LogoutButton = () => {
  const userContext = React.useContext(stateContext)
  return (
    <div className="u-pull-right">
    <button>
      <Link to="/">Dashboard</Link>
    </button>
    </div>
  )
}
export default LogoutButton
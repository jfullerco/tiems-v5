import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'

const SiteDetail = () => {
  const id = useParams()
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  const [key] = sites

  return (
    <div>
    Site Details - <LogoutButton />
    {}
    </div>
  )
}
export default SiteDetail
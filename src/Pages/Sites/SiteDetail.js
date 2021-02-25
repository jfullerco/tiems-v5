import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'

const SiteDetail = () => {
  const id = useParams()
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  const siteDetail = sites.find(site => console.log(id))

  return (
    <div>
    Site Details - <LogoutButton />
    {console.log(siteDetail)}
    </div>
  )
}
export default SiteDetail
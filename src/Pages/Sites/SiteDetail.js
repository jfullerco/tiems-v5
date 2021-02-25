import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../../stateContext'

const SiteDetail = () => {
  const id = useParams()
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  const getSite = (site) => site._id == id 
  const site = sites.slice(getSite)

  return (
    <div>
    {console.log(site)}
    </div>
  )
}
export default SiteDetail
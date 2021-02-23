import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData} = userContext
  const {sites} = sessionData
  const [clientSites, setClientSites] = useState(sites)

  console.log(userContext.sessionData)
  
  return (
    <>
    <div className="row">Site List - <Link to="/">Dashboard</Link></div>
    <div className="row">
      {sites.length > 1 ? clientSites.map(s => {
        <div className="row">{s._id}</div>
      }) : (<div>no sites</div>)}
    </div>
    </>
  )
}
export default SiteList
import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)

  
  
  return (
    <>
    <div className="row">Site List - <Link to="/">Dashboard</Link></div>
    <div className="row">
      {userContext.sessionData.sites ? userContext.sessionData.sites.map((site) => {
        <div className="row">{console.log(site)}{...site}</div>
      }) : (<div>no sites</div>)}
    </div>
    </>
  )
}
export default SiteList
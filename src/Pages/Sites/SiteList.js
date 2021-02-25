import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  
  

  console.log(name)
  
  return (
    <>
    <div className="row">Site List - <Link to="/">Dashboard</Link></div>
    <div className="row">
      {sites ? sites.map((site) => (
        <div className="row">
        
        ID: {site._id}</div>
      )) : (<div>no sites</div>)}
    </div>
    </>
  )
}
export default SiteList
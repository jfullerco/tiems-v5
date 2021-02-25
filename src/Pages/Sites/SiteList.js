import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  console.log()
    
  return (
    <>
    <div className="row">Site List - <Link to="/">Dashboard</Link></div>
    <div className="row">
    <div className="four columns">
    <p />
    {sites != !sites ? sites.map(site => (
       <div className="button">
        {site.site_name}
       </div>
      )
    ) : (
      <div className="button">
          <span className="error">No sites found</span>
      </div>
    )}
    </div>
    </div>
    </>
  )
}
export default SiteList
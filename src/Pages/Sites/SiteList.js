import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  console.log()
    
  return (
    <>
    <div className="row">Site List - <LogoutButton /></div>
    <div className="row">
    <div className="four columns">
    <p />
    {sites != !sites ? sites.map(site => (
       <div className="button" key={site._id}>
        <Link to={`/sites/${site._id}`}>{site.site_name}</Link>
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
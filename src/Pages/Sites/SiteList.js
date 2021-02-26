import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  const {goBack} = useHistory()
  console.log(goBack)
    
  return (
    <>
    <div className="row">
    Site List
    </div>
    <button onClick={goBack}>Back</button>
    <div className="row">
    <div className="four columns">
    <p />
    <span><div><LogoutButton /></div></span>
    {sites != !sites ? sites.map(site => (
       <span>
       <div className="button" key={site._id}>
        <Link to={`/sites/${site._id}`}>{site.site_name}</Link>
       </div>
       </span>
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
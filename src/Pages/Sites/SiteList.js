import React, {useState, useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {stateContext} from '../../stateContext'



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
    
    <div className="row">
    <div className="four columns">
    <p />
    
    {sites != !sites ? sites.map(site => (
       <span key={site._id}>
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
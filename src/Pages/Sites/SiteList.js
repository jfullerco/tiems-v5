import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {stateContext} from '../../stateContext'

const SiteList = () => {
  
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  
  console.log(Object.keys([sites]))
    
  return (
    <>
    <div className="row">Site List - <Link to="/">Dashboard</Link></div>
    <div className="row">
      
      
    </div>
    </>
  )
}
export default SiteList
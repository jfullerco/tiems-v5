import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {StateContext} from '../../stateContext'

const SiteList = () => {
  
  const userInfo = useContext(StateContext)
  
  return (
    <>
    Site List - <Link to="/">Dashboard</Link>
    </>
  )
}
export default SiteList
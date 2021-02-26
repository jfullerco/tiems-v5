import React, {useState, useEffect, useContext} from 'react'
import {Link, Redirect, useParams} from 'react-router-dom'

import {stateContext} from '../../stateContext'

import LogoutButton from '../../Components/LogoutButton'

const SiteDetail = () => {
  const {id} = useParams()
  const userContext = useContext(stateContext)
  const {sessionData: {sites}} = userContext
  const siteDetails = sites.find((site) => site._id === id) 
  console.log(siteDetails)
  return (
    <div>
    Site Details - <LogoutButton />
    {siteDetails ? (
      <table className="u-full-width">
      <thead>
        <th>Site Name</th>
        <th>Address</th>
      </thead>
      <tbody>
        <tr>
        <td>{siteDetails.site_name}</td>
        <td>
          {siteDetails.site_add1}
          {siteDetails.site_add2} 
          {siteDetails.site_city} {siteDetails.site_state}, {siteDetails.site_zip}
        </td>
        </tr>
      </tbody>
    </table>
    ) : (
      <div className="button">
        <span className="error">
        Site details not available
        </span>
      </div>
      )
    }
    </div>
  )
}
export default SiteDetail
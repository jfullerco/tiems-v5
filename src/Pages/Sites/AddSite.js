import React, {useState, useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom'

import putSite from '../../Services/siteService'

const AddSite = () => {

  const [addSite, setAddSite] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target.value
    setAddSite({...addSite, [name]: value})
  }
  const handleClick = () => {
    putSite(addSite)
    console.log("site Added")

  }

  return (
    <>
      <input
        type="text"
        name="site_name"
        onChange={handleChange}
        value={addSite.site_name}
        placeholder="site name"
      /><br />
      <input
        type="text"
        name="site_add1"
        onChange={handleChange}
        value={addSite.site_add1}
        placeholder="address 1"
      />
      <input
        type="text"
        name="site_add2"
        onChange={handleChange}
        value={addSite.site_add2}
        placeholder="address 2"
      />
      <input
        type="text"
        name="site_city"
        onChange={handleChange}
        value={addSite.site_city}
        placeholder="city"
      />
      <input
        type="text"
        name="site_state"
        onChange={handleChange}
        value={addSite.site_state}
        placeholder="state"
      />
      <input
        type="text"
        name="site_zip"
        onChange={handleChange}
        value={addSite.site_zip}
        placeholder="zip"
      />
      <button onClick={handleClick}>Add</button>

    </>
  )
}
export default AddSite
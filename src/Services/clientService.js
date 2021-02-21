import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async (clientID) => {
  
 const {data} = await http.get(`/rest/clients/${_id}`)
  return data

}
export default getClient
import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async (clientID) => {
  
 const {data} = await http.get(`/rest/clients/${clientID}`)
  return data

}
export default getClient
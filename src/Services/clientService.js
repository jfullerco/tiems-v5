import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async (clientID) => {
  
 return await http.get(`/rest/clients/${clientID}`)
  

}
export default getClient
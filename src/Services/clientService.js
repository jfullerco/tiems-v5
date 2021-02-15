import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async () => {
  
  return await http.get(`/rest/clients`)

}
export default getClient
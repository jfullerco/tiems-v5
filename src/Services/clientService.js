import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async (id) => {
  
  const response = await http.get(`/rest/clients/${id}`)
  return response.json()

}
export default getClient
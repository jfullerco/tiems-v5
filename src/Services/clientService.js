import React, {useState, useEffect} from 'react'
import http from './http-common'

const getClient = async (id) => {
  
 const {data} = await http.get(`/rest/clients/5f861fe2d279373c00615e26`)
  return data

}
export default getClient
import React, {useState, useEffect} from 'react'
import http from './http-common'

const loginService = async (user) => {
  
  return http.get(`/rest/client-access?q={"tiemsUser": "${user}"}&max=1`)
  
}
export default loginService
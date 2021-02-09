import React, {useState, useEffect} from 'react'
import http from './http-common'

const loginService = async (user) => {

  return await http.get(`/rest/client-access?q={"tiemsUser": "${user}"}`)

}
export default loginService
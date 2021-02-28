import React, {useState} from 'react'
import http from './http-common'

const getSite = async (id) => {

  return await http.get(`/rest/sites/${id}?metafields=true&fetchchildren=true`)

}

const putSite = async (id) => {

  return await http.put(`/rest/clients/${id}/sites`)

}
export default {putSite, getSite}
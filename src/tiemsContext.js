import React, {createContext} from 'react'
import useLogin from './Hooks/useLogin'

const tiemsContext =
const {clientLoggedIn} = useLogin()
const tiemsContext = React.createContext(navPages)



  
export default {tiemsContext}
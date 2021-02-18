import React, {useState, useEffect} from 'react'

import loginService from '../Services/loginService'

const useLogin = async ({user, pass}) => {
    const [clientLoggedIn, setClientLoggedIn] = useState(false)
    const [clientLoggedInID, setClientLoggedInID] = useState()
    const [loginErrors, setLoginErrors] = useState("")

    const {data: [login]} = await loginService(user, pass)
    console.log(login)
    login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 

          (
            
            setClientLoggedIn(true),
            setClientLoggedInID(login.tiemsClientID)
            
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )  
    return login
  }

export default useLogin


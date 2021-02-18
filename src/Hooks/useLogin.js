import React, {useState, useEffect} from 'react'

import loginService from '../Services/loginService'

const useLogin = async ({user, pass}) => {
    const [clientLoggedIn, setClientLoggedIn] = useState(false)
    const [clientLoggedInID, setClientLoggedInID] = useState()
    const [loginErrors, setLoginErrors] = useState("")

    const {data: [login]} = await loginService(user, pass)
    login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 

          (
            console.log(login),
            setClientLoggedIn(true),
            setClientLoggedInID(login.tiemsClientID)
            
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )  
   return console.log(clientLoggedIn)
  }

export default useLogin


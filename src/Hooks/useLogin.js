import React, {useState, useEffect} from 'react'
import Dashboard from '../Pages/Dashboard'

import loginService from '../Services/loginService'

const useLogin = () => {

  const [clientLoggedIn, setClientLoggedIn] = useState(false)
  const [clientLoggedInID, setClientLoggedInID] = useState()
  const [loginErrors, setLoginErrors] = useState("")

  const loginUser = async ({user, pass}) => {
    console.log({user, pass})
    const {data: [login]} = await loginService(user, pass)
      
      login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            
            await setClientLoggedIn(true),
            await setClientLoggedInID(login.tiemsClientID),
            <Dashboard />
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )
    
  }

  const logoutUser = () => {

    setClientLoggedIn(false)

    return (
      <div>Logged Out</div>
    )
  }

  return {clientLoggedIn, clientLoggedInID, loginUser, loginErrors, logoutUser}

}

export default useLogin


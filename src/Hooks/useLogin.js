import React, {useState, useEffect} from 'react'
import {useQuery,
        useMutation,
        useQueryClient,
        QueryClient,
        QueryClientProvider} from 'react-query'
import loginService from '../Services/loginService'

const useLogin = () => {

  const [userLoggedIn, setUserLoggedIn] = useState()
  const [clientLoggedIn, setClientLoggedIn] = useState("false")
  const [loginErrors, setLoginErrors] = useState("")

  const loginUser = async ({user, pass}) => {
    
    const {data: [login]} = await loginService(user, pass)
    
      login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            //setClientLoggedIn(login.tiemsClientID),
            setClientLoggedIn(login.tiemsClientID),
            setUserLoggedIn("User logged In")
          ) : (
            setLoginErrors("Incorrect username or password")
          )
        
      ) : (
        setLoginErrors("Incorrect username or password")
      )
  }

  const logoutUser = () => {

    setUserLoggedIn(false)
    setClientLoggedIn(null)

    return (
      <div>Logged Out</div>
    )
  }

  return {userLoggedIn, clientLoggedIn, loginUser, loginErrors}

}

export default useLogin


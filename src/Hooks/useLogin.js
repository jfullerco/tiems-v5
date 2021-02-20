import React, {useState, useEffect} from 'react'
import {StateContext} from '../stateContext'
import loginService from '../Services/loginService'

const useLogin = async ({user, pass}) => {
    
    const [loginErrors, setLoginErrors] = useState("")

    const loginUser = useContext(StateContext)
    
    const {data: [login]} = await loginService(user, pass)
    
    login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 

          (
           loginUser.setClientLoggedIn(true) 
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )  
    return console.log("logged In")
  }

export default useLogin


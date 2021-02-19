import React, {useState, useEffect} from 'react'
import {StateContext} from '../stateContext'
import loginService from '../Services/loginService'

const useLogin = async ({user, pass}) => {
    
    const [loginErrors, setLoginErrors] = useState("")
    const {loginState, updateLoginState} = useContext
    
    const {data: [login]} = await loginService(user, pass)
    console.log(login)
    login != null ? (  
        login.tiemsUser == user && login.tiemsPass == pass ? 

          (
            console.log("logged In")
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )  
   
  }

export default useLogin


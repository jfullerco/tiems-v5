import React, {useState, useEffect} from 'react'
import {StateContext} from '../stateContext'
import loginService from '../Services/loginService'

const useLogin = async ({user, pass}) => {
    
    const [loginErrors, setLoginErrors] = useState("")
    
    console.log(`this${user}`)
    const {data: [login]} = await loginService(user, pass)
    
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


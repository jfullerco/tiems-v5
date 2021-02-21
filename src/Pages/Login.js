import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import loginService from '../Services/loginService'
import {StateContext} from '../stateContext'


export default function Login() {
  const userContext = useContext(StateContext)
  console.log(userContext.clientLoggedIn)
  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  const [loginErrors, setLoginErrors] = useState("")

  const handleSubmit = async ({user, pass}) => {
    
    const {data: [login]} = await loginService(user, pass)
    
    login != null ? (
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            userContext.setClientLoggedIn(true)
          ) : (
            setLoginErrors("Incorrect username or password")
          )

      ) : (
        setLoginErrors("Incorrect username or password")
      )
    return <Redirect to="/" />           
  }
  
  const handleInputChange = event => {    
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})    
  }

  return(
    <div>    
          <input
            type="text"
            placeholder="user"
            name="user"
            value={loginAttempt.user}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            value={loginAttempt.pass}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            
            onClick={()=>handleSubmit(loginAttempt)}
          >Login</button>  
    </div>
  )

}
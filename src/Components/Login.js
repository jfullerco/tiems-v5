import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import Dashboard from './Dashboard'

export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState()
  
  const loginHook = useLogin()
  const {clientLoggedIn} = loginHook
  

  const attemptLogin = () => {
    
    loginHook.loginUser(loginAttempt)
    

  }

  const handleInputChange = event => {
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
  }

  console.log(clientLoggedIn)

  return(
    <div>
      {clientLoggedIn != true ? (
        <form><div>  
          <input
            type="text"
            placeholder="user"
            name="user"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="pass"
            name="pass"
            onChange={handleInputChange}
          />
          
          <button
          type="submit" 
          onClick={attemptLogin}>
            Login
          </button>
          
          <div className="error"><h6>{loginHook.loginErrors}</h6></div>
        </div></form>
      ) :(
    <form><Dashboard /> 
    <button type="submit" onClick={loginHook.logoutUser}>Logout</button></form>
      )}
    </div>
  )

}
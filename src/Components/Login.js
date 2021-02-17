import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import Dashboard from './Dashboard'

export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState()
  
  const loginHook = useLogin()
  const {clientLoggedIn} = loginHook
  const {logoutUser} = loginHook

  const attemptLogin = () => {
    
    loginHook.loginUser(loginAttempt)
    setLoginAttempt([])

  }

  const handleInputChange = event => {
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
  }

  console.log(clientLoggedIn)

  return(
    <div>
      {clientLoggedIn ? (
        <div>  
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
        </div>
      ) :(
    <><Dashboard /> 
    <button onClick={()=>logoutUser()}>Logout</button></>
      )}
    </div>
  )

}
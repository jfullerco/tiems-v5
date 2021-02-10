import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'

export default function Login() {

  
  const [loginAttempt, setLoginAttempt] = useState()
  
  const loginHook = useLogin()

  const attemptLogin = () => {
    
    loginHook.loginUser(loginAttempt)
    setLoginAttempt([])

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
      <div>{console.log(loginHook.clientLoggedIn)}</div>
    </div>
  )

}
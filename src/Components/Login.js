import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'

export default function Login() {

  
  const [loginAttempt, setLoginAttempt] = useState()
  
  const loginHook = useLogin()

  const attemptLogin = () => {
    
    loginHook.loginUser(loginAttempt)
  }

  return(
    <div>
      <input
        type="text"
        placeholder="user"
        onChange={e => setLoginAttempt({...loginAttempt, user: e.target.value})}
      />
      <input
        type="password"
        placeholder="pass"
        onChange={e => setLoginAttempt({...loginAttempt, pass: e.target.value})}
      />
      <button
       type="button" 
       onClick={() => attemptLogin(loginAttempt)}>
        Login
      </button>
      
      <div className="error"><h6>{loginHook.loginErrors}</h6></div>

    </div>
  )

}
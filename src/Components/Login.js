import React, {useState, useEffect} from 'react'
import useLogin, {loginUser} from '../Hooks/useLogin'

export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState({
    user: "", 
    pass: ""
    })
  const loginHook = useLogin()

  const attemptLogin = e => {
    e.preventDefault()
    loginHook.loginUser(loginAttempt)
  }

  console.log(loginHook.clientLoggedIn)

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
      <button type="button" onClick={attemptLogin}>Login</button>


    </div>
  )

}
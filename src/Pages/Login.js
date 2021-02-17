import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import Dashboard from './Dashboard'

export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  const loginHook = useLogin()
  const {clientLoggedIn} = loginHook
  
  useEffect(() => {
    <Dashboard />
  }, [clientLoggedIn])

  const attemptLogin = (e) => {
    e.preventDefault()
    loginHook.loginUser(loginAttempt)
    console.log(loginAttempt)

  }

  const handleInputChange = event => {
    event.preventDefault()
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
  }

  console.log(loginHook.clientLoggedInID)

  return(
    <div>
       <form onSubmit={attemptLogin}>  
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
          
          <input
            type="submit" 
            value="Login"
          />
            
          
          <div className="error"><h6>{loginHook.loginErrors}</h6></div>
        </form>
    </div>
  )

}
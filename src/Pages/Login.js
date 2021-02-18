import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import Dashboard from './Dashboard'

export default function Login({res}) {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  const handleSubmit = () => {
    
    useLogin(loginAttempt)
    
    
  }
  
  const handleInputChange = event => {
    event.preventDefault()
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
    
  }
  
console.log(loginAttempt)
  return(
    <div>
       <form >  
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
            type="button" 
            value="Login"
            onClick={handleSubmit}
          />
          <div className="error">
            <h6>{useLogin.loginErrors}</h6>
          </div>
        </form>
    </div>
  )

}
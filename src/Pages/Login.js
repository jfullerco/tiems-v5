import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import {StateContext} from '../stateContext'


export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  const handleSubmit = () => {
    
    useLogin(loginAttempt)
    
  }
  
  const handleInputChange = event => {
    
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
    
  }
  

  return(
    <div>
       <form onSubmit={handleSubmit}>
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
          <input
            type="submit"
            value="Login"
            
          />
          </form>
          
          
        
    </div>
  )

}
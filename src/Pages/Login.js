import React, {useState, useEffect} from 'react'
import useLogin from '../Hooks/useLogin'
import Dashboard from './Dashboard'
import {useStateStore} from '../test'

export default function Login({session}) {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  
  
  console.log("this", session)
  const handleSubmit = () => {
    
    useLogin(loginAttempt)
    const {login} = useLogin()
    console.log(login)
    
  }
  
  const handleInputChange = event => {
    
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
          
        </form>
    </div>
  )

}
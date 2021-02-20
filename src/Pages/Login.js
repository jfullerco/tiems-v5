import React, {useState, useEffect, useContext} from 'react'
import useLogin from '../Hooks/useLogin'
import {StateContext} from '../stateContext'


export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  console.log(useLogin)
  const user = useContext(StateContext)

  const handleSubmit = (event) => {
    
     useLogin(loginAttempt)
    
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
import React, {useState, useEffect, useContext} from 'react'
import loginService from '../Services/loginService'
import {StateContext} from '../stateContext'


export default function Login() {

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  
  const user = useContext(StateContext)

  const handleSubmit = ({user, pass}) => {
    
    const {data: [login]} = loginService(user, pass)
    
      login != null ? (

        login.tiemsUser == user && login.tiemsPass == pass ? 

          (
           user.setClientLoggedIn(true)
          
          ) : (

            setLoginErrors("Incorrect username or password")

          )
        
      ) : (

        setLoginErrors("Incorrect username or password")

      )  
  }
  console.log(loginAttempt)
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
            
            onClick={handleSubmit(loginAttempt)}
          >Login</button>
      
      
    </div>
  )

}
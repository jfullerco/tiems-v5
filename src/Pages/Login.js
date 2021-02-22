import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import loginService from '../Services/loginService'
import {StateContext} from '../stateContext'


export default function Login() {
  const userContext = useContext(StateContext)
  
  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  const [saveMe, setSaveMe] = useState(false)
  
  const [loginErrors, setLoginErrors] = useState("")

  const handleSubmit = async ({user, pass, save}) => {
    
    const {data: [login]} = await loginService(user, pass)
    
    login != null ? (
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            userContext.setClientLoggedIn(true),
            userContext.setSessionData({clientID: login._parent_id}),
            localStorage.setItem('LoggedIn', saveMe)
          ) : (
            setLoginErrors("Incorrect username or password")
          )
          ) : (
            setLoginErrors("Incorrect username or password")
          )
    return <Redirect to="/" />           
  }
  
  const handleInputChange = event => {    
    const {name, value} = event.target
    setLoginAttempt({...loginAttempt, [name]: value})
  }
  const handleSaveMe = event => {
    setSaveMe(!saveMe)
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
          <div>
          <input
            type="checkbox"
            name="save"
           
            onChange={handleSaveMe}
          /> Remember me </div>
          <button
            type="submit"
            
            onClick={()=>handleSubmit(loginAttempt)}
          >Login</button>  
    </div>
  )

}
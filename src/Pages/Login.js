import React, {useState, useEffect, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import loginService from '../Services/loginService'
import {stateContext} from '../stateContext'


export default function Login() {
  const userContext = useContext(stateContext)
  const history = useHistory()

  const [loginAttempt, setLoginAttempt] = useState({user: "", pass: ""})
  const [saveMe, setSaveMe] = useState(false)
  
  const [loginErrors, setLoginErrors] = useState("")

  const handleSubmit = async ({user, pass, save}) => {
    
    const {data: [login]} = await loginService(user, pass)
    
    login != null ? (
        login.tiemsUser == user && login.tiemsPass == pass ? 
          (
            userContext.setClientLoggedIn(true),
            
            localStorage.setItem('clientID', login._parent_id),
            localStorage.setItem('LoggedIn', "true"),
            history.push("/")
             
          ) : (
            setLoginErrors("Incorrect username or password")
          )
          ) : (
            setLoginErrors("Incorrect username or password")
          )
              
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
          <div className="row">
          <input
            type="text"
            placeholder="user"
            name="user"
            value={loginAttempt.user}
            onChange={handleInputChange}
          />
          </div>
          <div className="row">
          <input
            type="password"
            placeholder="pass"
            name="pass"
            value={loginAttempt.pass}
            onChange={handleInputChange}
          />
          </div>
          <div className="row">
          <input
            type="checkbox"
            name="save"
           
            onChange={handleSaveMe}
          /> Remember me 
          </div>
          <div className="row">
          <button
            type="submit"
            
            onClick={()=>handleSubmit(loginAttempt)}
          >Login</button>
          </div>  
    </div>
  )

}
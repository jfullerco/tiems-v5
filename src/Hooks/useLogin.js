import React, {useState, useEffect} from 'react'
import loginService from '../Services/loginService'

const useLogin = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [clientLoggedIn, setClientLoggedIn] = useState(null)
  const [loginErrors, setLoginErrors] = useState("")

  const loginUser = ({user, pass}) => {
    
    loginService(user, pass)
    .then(res => {
      const {tiemsUser, tiemsPass, tiemsClientID} = res.data[0]
      if (tiemsUser == user && tiemsPass == pass) {
      setClientLoggedIn(tiemsClientID)}
      else
      {setLoginErrors("Incorrect Username or Password")}
      
    })
    
  }

  const logoutUser = () => {

    setUserLoggedIn(false)
    setClientLoggedIn(null)

    return (
      <div>Logged Out</div>
    )
  }

  return {userLoggedIn, clientLoggedIn, loginUser, loginErrors}

}

export default useLogin


import React, {useState, useEffect} from 'react'
import loginService from '../Services/loginService'

const useLogin = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [clientLoggedIn, setClientLoggedIn] = useState(null)
  const [valLogin, setValLogin] = useState()
  const [loginErrors, setLoginErrors] = useState("")

  const loginUser = async ({user, pass}) => {
    console.log(user)
    const {data} = await loginService(user, pass)
      data.length == 1 ? (  
        data[0].tiemsUser == user && data[0].tiemsPass == pass ? 
          (
            console.log("logged in")
          ) : (
            setLoginErrors("Incorrect username or password")
          )
      ) : (
        setLoginErrors("Incorrect username or password")
      )
  }

  const handleValidateLogin = () => {
    console.log(valLogin)
    tiemsUser && tiemsPass ? (
        console.log("correct user")
      ):(console.log("incorrect user"))
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


/*
const {tiemsUser, tiemsPass, tiemsClientID} = res.data[0]
      if (tiemsUser == user && tiemsPass == pass) 
      console.log(tiemsClientID)
      else
      console.log("Incorrect Username or Password")
*/
export default useLogin


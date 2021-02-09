import React, {useState, useEffect} from 'react'
import loginService from '../Services/loginService'

const useLogin = () => {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [clientLoggedIn, setClientLoggedIn] = useState({})
  const [loginErrors, setLoginErrors] = useState("")

  const loginUser = async ({user, pass}) => {
    console.log(user)
    const {data} = await loginService(user, pass)
      data[0].length == 1 ? (  
        data[0].tiemsUser == user && data[0].tiemsPass == pass ? 
          (
            
            console.log(data[0])
            
          ) : (
            setLoginErrors("Incorrect username or password")
          )
        
      ) : (
        setLoginErrors("Incorrect username or password")
      )
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

/*data[0].tiemsUser == user && data[0].tiemsPass == pass ? 
          (
            
            console.log(client),
            setClientLoggedIn(client)
          ) : (
            setLoginErrors("Incorrect username or password")
          )*/

export default useLogin


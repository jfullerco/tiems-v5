import React, {useState, useEffect} from 'react'

function useLogin() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [clientLoggedIn, setClientLoggedIn] = useState(null)

  const Login = (user, pass, id) => {

    setUserLoggedIn(true)
    setClientLoggedIn()
    return {userLoggedIn, clientLoggedIn}

  }

  const Logout = () => {

    setUserLoggedIn(false)
    setClientLoggedIn(null)

    return {userLoggedIn, clientLoggedIn}

  }

}
export default useLogin


import React, {useState, useEffect} from 'react'

function useLogin() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  const [clientLoggedIn, setClientLoggedIn] = useState(null)
  

  const loginUser = () => {
    const {user, pass} = event.target

    setUserLoggedIn(true)
    setClientLoggedIn(user)
    
  }

  const logoutUser = () => {

    setUserLoggedIn(false)
    setClientLoggedIn(null)

    return <div>Logged Out</div>

  }

  return {userLoggedIn, clientLoggedIn, loginUser, logoutUser}

}
export default useLogin


import React, {useState, useEffect} from 'react'

const [userLoggedIn, setUserLoggedIn] = useState(false)
const [clientLoggedIn, setClientLoggedIn] = useState(null)

const Login = () => {

  return {userLoggedIn, clientLoggedIn}

}

const Logout = () => {

  setUserLoggedIn(false)
  setClientLoggedIn(null)

  return {userLoggedIn, clientLoggedIn}

}


//Should relocate to Login Hook and only place DOM stuff in component....//
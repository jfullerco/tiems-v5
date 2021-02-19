import React, {useState, createContext} from 'react'

const initialState = {
  clientLoggedIn: false
}

export const StateContext = createContext({})

export const StateProvider = (props) => {
    const {Provider} = StateContext
    const [clientLoggedIn, setClientLoggedIn] = useState(
      {clientLoggedIn: false})
    const [sessionData, setSessionData] = useState([])
    const updateLoggedIn = (e) => {
          
          setClientLoggedIn(e)
    }
    return (
      <Provider value={{
         loginState: clientLoggedIn, 
         updateLoginState: () => setClientLoggedIn({...clientLoggedIn, clientLoggedIn: true}),
         sessionState: sessionData,
         updateSessionState: (e) => setSessionData({...sessionData, e}) 
      }}>
        {props.children}
      </Provider>
    )
  
}


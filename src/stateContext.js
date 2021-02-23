import React, {useState, createContext, useRef} from 'react'

export const StateContext = createContext({})

export const StateProvider = (props) => {
    const {Provider} = StateContext
    const [clientLoggedIn, setClientLoggedIn] = useState(
      false)
    const [sessionData, setSessionData] = useState("test") 
    
    return (
      <Provider value={{
          clientLoggedIn, 
          setClientLoggedIn,
          sessionData, 
          setSessionData 
      }}>
        {props.children}
      </Provider>
    )
  
}


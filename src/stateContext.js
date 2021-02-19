import React, {useState, createContext} from 'react'

const initialState = {
  clientLoggedIn: false
}

export const StateContext = createContext(initialState)
export const StateProvider = ({children}) => {
   
    const [clientLoggedIn, setClientLoggedIn] = useState(false)
    
    return (
      <StateContext.Provider value={{clientLoggedIn, setClientLoggedIn}}>
        {children}
      </StateContext.Provider>
    )
  
}


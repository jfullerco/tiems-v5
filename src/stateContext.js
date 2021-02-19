import React, {useState, createContext} from 'react'


export const stateContext = createContext()
export const stateProvider = ({children}) => {
  export const useStateStore = (initialStateStore) => {

    const [stateStore, setStateStore] = useState()

    const handleChange = (e) => {
            
            setStateStore({...stateStore, ...e})
        
        }
    
    return (
      <stateContext.Provider value={stateStore}>
        {props.children}
      </stateContext.Provider>
    )
  }
}


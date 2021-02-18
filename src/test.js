import React, {useState} from 'react'

const useStateStore = (props) => {
  const initialStateStore = {
    clientLoggedIn: "",
    a: "false"
  }
  const [stateStore, setStateStore] = useState(initialStateStore)

  const handleChange = ({name, value}) => {
          console.log(name)
           setStateStore({...stateStore, name: value})
      
      }

  return {stateStore, useStateStore}, handleChange 
}
export default useStateStore
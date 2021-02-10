import React, {useState, useEffect} from 'react'


//Components
import Dashboard from '../Components/Dashboard.js'

const useNavigator = () => {

const [nav, setNav] = useState()

return {nav, setNav}

}
export default useNavigator

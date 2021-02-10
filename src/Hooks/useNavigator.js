import React, {useState, useEffect} from 'react'

//Hooks
import useLogin from './useLogin'
import useAdmin from './useAdmin'
import useClient from './useClient'
import useSite from './useSite'

//Components
import Dashboard from '../Components/Dashboard.js'

const useNavigator = () => {

const navList = {
  dashboard: () => <Dashboard />
}

const [nav, setNav] = useState()

return {nav, setNav}

}
export default useNavigator

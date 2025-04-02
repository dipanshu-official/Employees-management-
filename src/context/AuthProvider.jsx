import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'



export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState(null)

    useEffect(() => {
        const {employees ,admin }=getLocalStorage()
        setUserdata({employees,admin})
    },[])

    const data = getLocalStorage()

   
  return (
    <AuthContext value={userdata}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider
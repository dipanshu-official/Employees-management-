import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userdata, setUserdata] = useState(null)

  useEffect(() => {
    const localData = getLocalStorage();  // Assuming getLocalStorage returns an object
    if (localData) {
      const { employees, admin } = localData;  // Ensure these keys exist
      ('employees',employees)
      setUserdata({ employees, admin });

    }
  }, []);




  return (
    <AuthContext value={userdata}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider
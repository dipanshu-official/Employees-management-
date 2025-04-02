import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)

  const Authdata = useContext(AuthContext)
  console.log(Authdata)

  const handleLogin = (email, password) => {
    if (Authdata.admin.find((e) => e.email === email && e.password === password)) {
      setUser("admin");
    } else if (Authdata.employees.find((e) => e.email === email && e.password === password)) {
      setUser("employee");
    } else {
      alert("Invalid email or password");
    }
  };

  if (!user) {
    return (<Login handleLogin={handleLogin}/> )
  }  
  // handleLogin()
  return (
    <>
    {user=="admin" ? <AdminDashboard/>: <EmployDashboard/>}
   
    
    </>
  )
}

export default App
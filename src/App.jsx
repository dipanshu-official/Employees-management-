import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDashboard from './components/Dashboard/EmployDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  const Authdata = useContext(AuthContext)

  // useEffect(() => {
  //   if (Authdata) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)        
  //     }
      
  //   }
  
    
  // }, [Authdata])
  

  setLocalStorage()
  const handleLogin = (email, password) => {

    if (Authdata.admin.find((e) => e.email === email && e.password === password)) {


      setUser("admin");
      localStorage.setItem('loggedInUser' , JSON.stringify({role:'admin'}))


    } else if (Authdata) {
     const employee= Authdata.employees.find((e) => e.email === email && e.password === password)
     if (employee) {
     setUser("employees");
     setLoggedInUserData(employee)
     localStorage.setItem('loggedInUser' , JSON.stringify({role:'employee'}))
      
     }

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

    {user == 'admin' ? <AdminDashboard/> : (user == 'employees' ? <EmployDashboard data={loggedInUserData} /> : null)}
   
    
    </>
  )
}

export default App
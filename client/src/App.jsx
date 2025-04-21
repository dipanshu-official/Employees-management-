import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployDashboard from './components/Dashboard/EmployDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignIn from './components/Auth/SignUp';
import SignUp from './components/Auth/SignUp';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const userdata = useSelector((state => state.auth))
  console.log("🚀 ~ App ~ userdata:", userdata)


  useEffect(() => {
    // Ensure localStorage is set only once
    setLocalStorage();

    // Retrieve logged-in user data
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
    }

    const storedUserData = localStorage.getItem('loggedInUserData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setLoggedInUserData(userData);
    }
  }, []);

  // const handleLogin = (email, password) => {

  //   if (!userdata || typeof userdata !== 'object') {
  //     alert('userdata is missing or incorrect');
  //     return;
  //   }


  //   if (userdata.admin.find((e) => e.email === email && e.password === password)) {
  //     const userInfo = userdata.admin.find((e) => e.email === email)
  //     console.log("userInfo =>", userInfo)
  //     setUser('admin');
  //     localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
  //   } else {
  //     const employee = userdata.employees.find((e) => e.email === email && e.password === password);

  //     if (employee) {
  //       setUser('employees');
  //       setLoggedInUserData(employee);
  //       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees' }));
  //       localStorage.setItem('loggedInUserData', JSON.stringify(employee));
  //     } else {
  //       alert('Invalid email or password');
  //     }
  //   }
  // };
  const handleLogin = (email, password) => {
    if (!userdata || typeof userdata !== 'object') {
      alert('userdata is missing or incorrect');
      return;
    }

    // Array of roles and their corresponding handlers
    const roles = [
      {
        name: 'superAdmin',
        users: userdata.superAdmin,
        onSuccess: () => {
          setUser('superAdmin');
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'superAdmin' }));
        }
      },
      {
        name: 'admin',
        users: userdata.admin,
        onSuccess: () => {
          setUser('admin');
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
        }
      },
      {
        name: 'employees',
        users: userdata.employees,
        onSuccess: (user) => {
          setUser('employees');
          setLoggedInUserData(user);
          localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees' }));
          localStorage.setItem('loggedInUserData', JSON.stringify(user));
        }
      }
    ];

    // Check each role
    for (let role of roles) {
      const foundUser = role.users?.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        role.onSuccess(foundUser);
        return;
      }
    }

    // No matching user found
    alert('Invalid email or password');
  };


  if (!user) {
    return <Login handleLogin={handleLogin} /> ;
  }

  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            user === 'admin' ? (
              <AdminDashboard newUserData={setUser} />
            ) : user === 'employees' ? (
              <EmployDashboard data={loggedInUserData} newUserData={setUser} />
            ) : user === 'superAdmin' ? (
              <SuperAdminDashboard data={loggedInUserData} newUserData={setUser} />
            ) : (
              <div>Unauthorized or Unknown Role</div>
            )
          }
        />
        {/* You can add a default or 404 route too if needed */}
      </Routes>
    </>
  );


};

export default App;

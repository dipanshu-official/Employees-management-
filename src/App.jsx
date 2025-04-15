import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployDashboard from './components/Dashboard/EmployDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const userdata = useSelector((state => state.auth))


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

    // Super Admin check
    const superAdmin = userdata.superAdmin?.find(
      (e) => e.email === email && e.password === password
    );

    if (superAdmin) {
      setUser('superAdmin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'superAdmin' }));
      return;
    }

    // Admin check
    const admin = userdata.admin?.find(
      (e) => e.email === email && e.password === password
    );

    if (admin) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    // Employees check
    const employees = userdata.employees?.find(
      (e) => e.email === email && e.password === password
    );

    if (employees) {
      setUser('employees');
      setLoggedInUserData(employees);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees' }));
      localStorage.setItem('loggedInUserData', JSON.stringify(employees));
      return;
    }

    // Invalid login
    alert('Invalid email or password');
  };


  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <Router>
      <>
        {user === 'admin' ? (
          <AdminDashboard newUserData={setUser} />
        ) : user === 'employees' ? (
          <EmployDashboard data={loggedInUserData} newUserData={setUser} />
        ) : user === 'superAdmin' ? (
          <SuperAdminDashboard data={loggedInUserData} newUserData={setUser} />
        ) : (
          <div>Unauthorized or Unknown Role</div>
        )}
      </>
    </Router>
  );

};

export default App;

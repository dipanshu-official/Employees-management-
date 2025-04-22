import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import EmployDashboard from './components/Dashboard/EmployDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SuperAdminDashboard from './components/Dashboard/SuperAdminDashboard';

import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const userdata = useSelector((state) => state.auth);

  useEffect(() => {
    setLocalStorage();

    const storedUser = localStorage.getItem('loggedInUser');
    const storedUserData = localStorage.getItem('loggedInUserData');

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
    }

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setLoggedInUserData(userData);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userdata || typeof userdata !== 'object') {
      alert('userdata is missing or incorrect');
      return;
    }

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

    for (let role of roles) {
      const foundUser = role.users?.find(
        (u) => u.email === email && u.password === password
      );
      if (foundUser) {
        role.onSuccess(foundUser);
        return;
      }
    }

    alert('Invalid email or password');
  };

  return (
    <Routes>
    {!user ? (
      <>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </>
    ) : (
      <>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {user === 'admin' && (
          <Route path="/dashboard" element={<AdminDashboard newUserData={setUser} />} />
        )}
        {user === 'employees' && (
          <Route path="/dashboard" element={<EmployDashboard data={loggedInUserData} newUserData={setUser} />} />
        )}
        {user === 'superAdmin' && (
          <Route path="/dashboard" element={<SuperAdminDashboard data={loggedInUserData} newUserData={setUser} />} />
        )}
  
        {!['admin', 'employees', 'superAdmin'].includes(user) && (
          <Route path="*" element={<div>Unauthorized or Unknown Role</div>} />
        )}
      </>
    )}
  </Routes>
  
  );
};

export default App;

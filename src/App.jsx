import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployDashboard from './components/Dashboard/EmployDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userdata, setUserdata] = useContext(AuthContext)


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

  const handleLogin = (email, password) => {

    if (!userdata || typeof userdata !== 'object') {
      alert('userdata is missing or incorrect');
      return;
    }
  

    if (userdata.admin.find((e) => e.email === email && e.password === password)) {
      const userInfo =userdata.admin.find((e) => e.email === email)
      console.log("userInfo =>", userInfo)
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else {
      const employee = userdata.employees.find((e) => e.email === email && e.password === password);

      if (employee) {
        setUser('employees');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employees' }));
        localStorage.setItem('loggedInUserData', JSON.stringify(employee));
      } else {
        alert('Invalid email or password');
      }
    }
  };

  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }

  return (
    <>
      {user === 'admin' ? <AdminDashboard newUserData={setUser} /> : user === 'employees' ? <EmployDashboard data={loggedInUserData} newUserData={setUser} /> : null}
    </>
  );
};

export default App;

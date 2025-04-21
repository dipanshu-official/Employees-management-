// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage } from '../utils/LocalStorage'
// import { useDispatch , useSelector } from 'react-redux'
// import setr







// const AuthProvider = ({ children }) => {
//   const userdata = useSelector((state=>state.auth))
//   const dispatch = useDispatch()

//   useEffect(() => {
//     const localData = getLocalStorage();  // Assuming getLocalStorage returns an object
//     if (localData) {
//       const { employees, admin } = localData;  // Ensure these keys exist
//       dispatch(setAuthData({ employees ,admin}));

//     }
//   }, []);




//   return (
//     <AuthContext value={[userdata , setUserdata]}>
//       {children}
//     </AuthContext>
//   )
// }

// export default AuthProvider
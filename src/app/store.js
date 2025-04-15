import { configureStore } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/LocalStorage";
import authReducer from "../../src/features/authSlice";
import  navigationReducer  from "../features/navigationSlice";


const localData = getLocalStorage();

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
  },
 
});

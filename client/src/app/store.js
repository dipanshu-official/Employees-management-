import { configureStore } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/LocalStorage";
import authReducer from "../features/authSlice";
import  navigationReducer  from "../features/navigationSlice";




// 3. Apply persistReducer

// 4. Create store
export const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
  },
});

// 5. Create 




import { configureStore } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/LocalStorage";
import authReducer from "../../src/features/authSlice";
import  navigationReducer  from "../features/navigationSlice";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  auth: authReducer,
  navigation: navigationReducer,
  
});

console.log('rootReducer',rootReducer)

// 2. Create persist config
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees', 'admin', 'superAdmin'], // only persist these
};

// 3. Apply persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Create store
export const store = configureStore({
  reducer: persistedReducer,
});

// 5. Create persistor
export const persistor = persistStore(store);


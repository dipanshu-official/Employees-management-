import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../utils/LocalStorage";

const localData = getLocalStorage();

const initialState ={
    employees:localData?.employees || null,
    admin : localData?.admin || null,
    superAdmin : localData?.superAdmin || null
}

const authSlice = createSlice({
    name:'auth',
    initialState,

    reducers:{
        setAuthData:(state , action) => {
            state.employees = action.payload.employees ;
            state.admin = action.payload.admin;
            state.superAdmin = action.payload.superAdmin
        },
        clearAuthData:(state , action) => {
            state.employees = null ;
            state.admin = null ;
            state.superAdmin = null ;
        }
    }
});

export const {setAuthData , clearAuthData} =authSlice.actions
export default authSlice.reducer

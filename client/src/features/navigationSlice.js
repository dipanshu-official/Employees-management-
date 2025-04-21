import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  currentPath: '/dashboard',
  sidebarOpen: true,
};

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPath: (state, action) => {
      state.currentPath = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { setCurrentPath, toggleSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;
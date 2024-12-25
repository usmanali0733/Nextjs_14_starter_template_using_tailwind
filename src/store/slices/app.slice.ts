import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SelectNavType = {
  mainNav: string;
  subNav: string;
};

type AppSliceState = {
  selectedSideBarItem: SelectNavType;
  isSidebarOpen: boolean;
};

const initialState: AppSliceState = {
  isSidebarOpen: true,
  selectedSideBarItem: {
    mainNav: '',
    subNav: 'Production',
  },
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    },
    openSidebar: (state) => {
      return {
        ...state,
        isSidebarOpen: true,
      };
    },
    closeSidebar: (state) => {
      return {
        ...state,
        isSidebarOpen: false,
      };
    },
    setSelectedSidebarItem: (state, action: PayloadAction<SelectNavType>) => {
      return {
        ...state,
        selectedSideBarItem: action.payload,
      };
    },
  },
});

export const { toggleSidebar, setSelectedSidebarItem, openSidebar, closeSidebar } =
  appSlice.actions;

export default appSlice.reducer;

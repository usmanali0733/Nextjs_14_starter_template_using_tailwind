import { RootState } from '../store';

export const selectIsSidebarOpen = (state: RootState) => state.app.isSidebarOpen;
export const selectSelectedSideBarItem = (state: RootState) => state.app.selectedSideBarItem;

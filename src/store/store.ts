import authSlice from '@/store/slices/auth.slice';
import { configureStore } from '@reduxjs/toolkit';
import appSlice from './slices/app.slice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

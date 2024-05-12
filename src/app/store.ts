import { configureStore } from "@reduxjs/toolkit";
import { dashboardReducer } from "../features/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    dasboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

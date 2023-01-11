import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataSlice from "../store/data.slice";

export const store = configureStore({
  reducer: {  data: dataSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

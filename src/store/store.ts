import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userSessionReducer } from "./user/userSessionSlice";

export const store = configureStore({
  reducer: { userSession: userSessionReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { quotesReducer } from "./quotes/quotesSlice";
import { uiDataReducer } from "./ui/uiSlice";
import { userSessionReducer } from "./user/userSessionSlice";

export const store = configureStore({
  reducer: {
    userSession: userSessionReducer,
    ui: uiDataReducer,
    quotes: quotesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

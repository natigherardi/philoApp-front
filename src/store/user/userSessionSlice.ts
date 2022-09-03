import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SessionInfo from "../../types/SessionInfo";
import { UserStore } from "../../types/UserData";

const userSessionInitialState: SessionInfo = {
  userData: { id: "", name: "", password: "" },
  isLoggedIn: false,
};

const userSessionSlice = createSlice({
  name: "users",
  initialState: userSessionInitialState,
  reducers: {
    loginUser: (
      _previusSessionInfo: SessionInfo,
      action: PayloadAction<UserStore>
    ) => ({ isLoggedIn: true, userData: { ...action.payload } }),
    logoutUser: (_previusSessionInfo: SessionInfo) => userSessionInitialState,
  },
});

export const userSessionReducer = userSessionSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSessionSlice.actions;

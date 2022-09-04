import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SessionInfo from "../../types/SessionInfo";
import { UserStore } from "../../types/UserData";

const userSessionInitialState: SessionInfo = {
  userData: { id: "", username: "", token: "" },
  isLoggedIn: false,
};

const userSessionSlice = createSlice({
  name: "users",
  initialState: userSessionInitialState,
  reducers: {
    loginUser: (
      previusSessionInfo: SessionInfo,
      action: PayloadAction<UserStore>
    ) => ({
      ...previusSessionInfo,
      isLoggedIn: true,
      userData: { ...action.payload },
    }),
    logoutUser: (_previusSessionInfo: SessionInfo) => userSessionInitialState,
  },
});

export const userSessionReducer = userSessionSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSessionSlice.actions;

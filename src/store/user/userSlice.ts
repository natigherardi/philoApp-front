import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SessionInfo from "../../types/SessionInfo";
import { UserStore } from "../../types/UserData";

const userInitialState: SessionInfo = {
  userData: { id: "", name: "", password: "" },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    loginUser: (
      _previusSessionInfo: SessionInfo,
      action: PayloadAction<UserStore>
    ) => ({ isLoggedIn: true, userData: action.payload }),
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;

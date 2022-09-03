import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStore } from "../../types/UserData";

const userInitialState: UserStore = {
  id: "",
  name: "",
  password: "",
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    loginUser: (previusUsers, action: PayloadAction<UserStore>) =>
      action.payload,
  },
});

export const userReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;

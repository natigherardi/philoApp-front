import SessionInfo from "../../types/SessionInfo";
import { loginUserActionCreator, userSessionReducer } from "./userSessionSlice";

describe("Given a user reducer", () => {
  describe("When it is called with a loginUser action", () => {
    test("Then it should return a new session info with isLoggedIn and the user info received", () => {
      const previusSessionInfo = {
        isLoggedIn: false,
        userData: { id: "", name: "", password: "" },
      };
      const newUserLogged = { id: "#", name: "#", password: "#" };
      const expectedNewSessionInfo = {
        isLoggedIn: true,
        userData: { id: "#", name: "#", password: "#" },
      };

      const newSessionInfo = userSessionReducer(
        previusSessionInfo,
        loginUserActionCreator(newUserLogged)
      );

      expect(newSessionInfo).toStrictEqual(expectedNewSessionInfo);
    });
  });
});

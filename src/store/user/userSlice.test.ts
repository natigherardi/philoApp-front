import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userSessionReducer,
} from "./userSessionSlice";

describe("Given a user reducer", () => {
  const emptySessionInfo = {
    isLoggedIn: false,
    userData: { id: "", name: "", password: "" },
  };

  const loggedUserSessionInfo = {
    isLoggedIn: true,
    userData: { id: "#", name: "#", password: "#" },
  };
  describe("When it is called with a loginUser action", () => {
    test("Then it should return a new session info with isLoggedIn and the user info received", () => {
      const newUserLogged = { id: "#", name: "#", password: "#" };

      const newSessionInfo = userSessionReducer(
        emptySessionInfo,
        loginUserActionCreator(newUserLogged)
      );

      expect(newSessionInfo).toStrictEqual(loggedUserSessionInfo);
    });
  });

  describe("When it is called with a logoutUser action", () => {
    test("Then it should return the session without the user logged", () => {});

    const newSessionInfo = userSessionReducer(
      loggedUserSessionInfo,
      logoutUserActionCreator()
    );

    expect(newSessionInfo).toStrictEqual(emptySessionInfo);
  });
});

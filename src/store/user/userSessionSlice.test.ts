import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userSessionReducer,
} from "./userSessionSlice";

describe("Given a userSession reducer", () => {
  const emptySessionInfo = {
    isLoggedIn: false,
    userData: { username: "", token: "", id: "" },
  };

  const loggedUserSessionInfo = {
    isLoggedIn: true,
    userData: { token: "#", id: "#", username: "#" },
  };
  describe("When it is called with a loginUser action", () => {
    test("Then it should return a new session info with isLoggedIn and the user info received", () => {
      const newUserLogged = { username: "#", token: "#", id: "#" };

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

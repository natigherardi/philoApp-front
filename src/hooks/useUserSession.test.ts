import axios from "axios";
import { useUserSession } from "./useUserSession";

const mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

const url = process.env.REACT_APP_API_URL as string;

describe("Given a useUserSession hok", () => {
  describe("When the login function returned is invoked with a user", () => {
    const login = useUserSession();
    const userWithToken = { data: { user: { token: "" } } };
    const user = { username: "", password: "" };
    test("Then it should call the repository method login with the data received", () => {
      const post = jest.fn().mockResolvedValue(userWithToken);
      axios.post = post;

      login(user);

      expect(post).toHaveBeenCalledWith(`${url}/user/login`, user);
    });
  });
});

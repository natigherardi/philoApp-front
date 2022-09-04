import axios from "axios";
import tokenDecoder from "../utils/tokenDecoder";
import { useUserSession } from "./useUserSession";

const mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

const mockedTokenDecodification = { username: "", id: "", token: "" };

jest.mock("../utils/tokenDecoder", () => () => mockedTokenDecodification);

const url = process.env.REACT_APP_API_URL as string;

describe("Given a useUserSession hook", () => {
  describe("When the login function returned is invoked with a user", () => {
    const login = useUserSession();
    const userWithToken = { data: { user: { token: "mockToken" } } };
    const user = { username: "", password: "" };
    test("Then it should call the repository method login with the data received", async () => {
      const post = jest.fn().mockResolvedValue(userWithToken);
      axios.post = post;

      await login(user);

      expect(post).toHaveBeenCalledWith(`${url}/user/login`, user);
    });
  });
});

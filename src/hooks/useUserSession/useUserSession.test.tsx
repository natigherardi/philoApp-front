import { renderHook } from "@testing-library/react";
import axios from "axios";
import UserRepository from "../repositories/UserRepository";
import { openModalActionCreator } from "../store/ui/uiSlice";
import Wrapper from "../testUtils/Wrapper";
import { useUserSession } from "./useUserSession";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

const mockedTokenDecodification = { username: "", id: "", token: "" };

jest.mock("../utils/tokenDecoder", () => () => mockedTokenDecodification);

const url = process.env.REACT_APP_API_URL as string;

describe("Given the login function returned by the userSession hook", () => {
  describe("When it is is invoked with a user", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const userWithToken = { data: { user: { token: "mockToken" } } };
    const user = { username: "", password: "" };

    test("Then it should call the repository method loginUser with the data received", async () => {
      const post = jest.fn().mockResolvedValue(userWithToken);
      axios.post = post;
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserSession(), { wrapper: Wrapper });

      await loginUser(user);

      expect(post).toHaveBeenCalledWith(`${url}/user/login`, user);
    });

    test("And then if the loginUser method throws an erorr, then the dispatch method should be called to open the modal of error", async () => {
      const expectedAction = openModalActionCreator({
        isError: true,
        message: "Login failed",
        isOpen: true,
      });
      const post = jest.fn().mockRejectedValue("error");
      axios.post = post;

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserSession(), { wrapper: Wrapper });

      await loginUser(user);

      expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given the reigster function returned by the userSession hook is invoked with a user", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When it is invoked with a user", () => {
    const userData = { username: "", password: "", name: "" };
    test("Then it should call the repository method registerUser with the data received and the dispatch to show success modal", async () => {
      const post = jest.fn().mockResolvedValue({ data: "user created" });
      axios.post = post;
      const expectedAction = openModalActionCreator({
        isError: false,
        isOpen: true,
        message: "Registration correct",
      });
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUserSession(), { wrapper: Wrapper });

      await registerUser(userData);

      expect(post).toHaveBeenCalledWith(`${url}/user/register`, userData);
      expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
    });

    test("An then if the registration returned an error it should call the dispatch with an action to show error modal", async () => {
      const expectedAction = openModalActionCreator({
        isError: true,
        message: "Registration failed",
        isOpen: true,
      });
      UserRepository.prototype.registration = jest.fn().mockRejectedValue("");
      const post = jest.fn().mockRejectedValue(new Error());
      axios.post = post;

      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUserSession(), { wrapper: Wrapper });

      await registerUser(userData);

      expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

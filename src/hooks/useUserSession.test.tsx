import { renderHook } from "@testing-library/react";
import axios from "axios";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { openModalActionCreator } from "../store/ui/uiSlice";
import { loginUserActionCreator } from "../store/user/userSessionSlice";
import { useUserSession } from "./useUserSession";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

const mockedTokenDecodification = { username: "", id: "", token: "" };

jest.mock("../utils/tokenDecoder", () => () => mockedTokenDecodification);

const url = process.env.REACT_APP_API_URL as string;

describe("When the login function returned is invoked with a user", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  //const loginUser = useUserSession();
  const userWithToken = { data: { user: { token: "mockToken" } } };
  const user = { username: "", password: "" };
  test("Then it should call the repository method loginUser with the data received", async () => {
    const post = jest.fn().mockResolvedValue(userWithToken);
    axios.post = post;
    const {
      result: { current: loginUser },
    } = renderHook(() => useUserSession(), { wrapper: Wrapper });

    await loginUser(user);

    expect(post).toHaveBeenCalledWith(`${url}/user/login`, user);
  });
  test("And then if the login method throws an erorr, then the dispatch method should be called to open the modal of error", async () => {
    const expectedAction = openModalActionCreator({
      isError: true,
      message: "Login failed",
      isOpen: true,
    });
    const post = jest.fn().mockRejectedValue("error");
    axios.post = post;

    const {
      result: { current: loginUser },
    } = renderHook(() => useUserSession(), { wrapper: Wrapper });

    await loginUser(user);

    expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
  });
});

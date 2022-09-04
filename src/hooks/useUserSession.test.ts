import axios from "axios";
import { useUserSession } from "./useUserSession";

const mockedDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

const mockedTokenDecodification = { username: "", id: "", token: "" };

jest.mock("../utils/tokenDecoder", () => () => mockedTokenDecodification);

const url = process.env.REACT_APP_API_URL as string;

describe("When the login function returned is invoked with a user", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const loginUser = useUserSession();
  const userWithToken = { data: { user: { token: "mockToken" } } };
  const user = { username: "", password: "" };
  test("Then it should call the repository method loginUser with the data received", async () => {
    const post = jest.fn().mockResolvedValue(userWithToken);
    axios.post = post;

    await loginUser(user);

    expect(post).toHaveBeenCalledWith(`${url}/user/login`, user);
  });
  test("And then if the login method throws an erorr, then it should reuturn mdoal Error", async () => {
    const mdoalError = { isError: true, message: "Error logging in" };
    const post = jest.fn().mockRejectedValue("error");
    axios.post = post;

    const expectedResult = await loginUser(user);

    expect(expectedResult).toStrictEqual(mdoalError);
  });
});

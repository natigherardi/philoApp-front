import { useDispatch } from "react-redux";
import UserRepository from "../repositories/UserRepository";
import { useAppDispatch } from "../store/hooks";
import { loginUserActionCreator } from "../store/user/userSessionSlice";
import { UserLogin } from "../types/UserData";
import tokenDecoder from "../utils/tokenDecoder";

export const useUserSession = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const userRepository = new UserRepository(url);
  const dispatch = useAppDispatch();

  const loginUser = async (userData: UserLogin) => {
    let modalError = { isError: false, message: "" };
    try {
      const {
        user: { token },
      } = await userRepository.login(userData);
      const userLogged = tokenDecoder(token);
      dispatch(loginUserActionCreator(userLogged));
      localStorage.setItem("token", token);
    } catch (error) {
      modalError = { isError: true, message: "Error logging in" };
      return modalError;
    }
    //dispatch UI modalError
  };
  return loginUser;
};

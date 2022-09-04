import { useDispatch } from "react-redux";
import UserRepository from "../repositories/UserRepository";
import { useAppDispatch } from "../store/hooks";
import { openModalActionCreator } from "../store/ui/uiSlice";
import { loginUserActionCreator } from "../store/user/userSessionSlice";
import { Modal } from "../types/UiData";
import { UserLogin } from "../types/UserData";
import tokenDecoder from "../utils/tokenDecoder";

export const useUserSession = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const userRepository = new UserRepository(url);
  const dispatch = useAppDispatch();

  const loginUser = async (userData: UserLogin) => {
    let modal: Modal = {
      isError: false,
      message: "Login correct",
      isOpen: true,
    };
    try {
      const {
        user: { token },
      } = await userRepository.login(userData);
      const userLogged = tokenDecoder(token);

      dispatch(loginUserActionCreator(userLogged));
      localStorage.setItem("token", token);
    } catch (error) {
      modal = { isError: true, message: "Login failed", isOpen: true };
    }
    dispatch(openModalActionCreator(modal));
  };
  return loginUser;
};

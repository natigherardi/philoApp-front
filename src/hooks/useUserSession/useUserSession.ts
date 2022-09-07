import UserRepository from "../../repositories/UserRepository/UserRepository";
import { useAppDispatch } from "../../store/hooks";
import { openModalActionCreator } from "../../store/ui/uiSlice";
import { loginUserActionCreator } from "../../store/user/userSessionSlice";
import { Modal } from "../../types/UiData";
import { UserData, UserLogin } from "../../types/UserData";
import tokenDecoder from "../../utils/tokenDecoder";

export const useUserSession = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const userRepository = new UserRepository(url);
  const dispatch = useAppDispatch();

  const loginUser = async (userData: UserLogin) => {
    try {
      const {
        user: { token },
      } = await userRepository.login(userData);
      const userLogged = tokenDecoder(token);

      dispatch(loginUserActionCreator(userLogged));
      localStorage.setItem("token", token);
    } catch (error) {
      const modal: Modal = {
        isOpen: true,
        isError: true,
        message: "Login failed",
      };
      dispatch(openModalActionCreator(modal));
    }
  };

  const registerUser = async (userData: UserData) => {
    let modal: Modal = {
      isError: false,
      isOpen: true,
      message: "Registration correct",
    };
    try {
      const registrationResult = await userRepository.registration(userData);
      if (registrationResult.name) {
        throw new Error("");
      }
    } catch (error) {
      modal = { ...modal, isError: true, message: "Registration failed" };
    }
    dispatch(openModalActionCreator(modal));
  };

  return { loginUser, registerUser };
};

import { useDispatch } from "react-redux";
import UserRepository from "../repositories/UserRepository";
import { loginUserActionCreator } from "../store/user/userSessionSlice";
import { UserData, UserLogin } from "../types/UserData";

export const useUserSession = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const userRepository = new UserRepository(url);
  const dispatch = useDispatch();

  const loginUser = async (userData: UserLogin) => {
    const { data: userWithToken } = await userRepository.login(userData);
    dispatch(loginUserActionCreator(userWithToken));
  };
  return loginUser;
};

import { IUserRepository } from "../types/IUserRepository";
import axios from "axios";
import UserData from "../types/UserData";

class UserRepository implements IUserRepository {
  apiUrl = process.env.REACT_APP_API_URL as string;
  public static registration = async (userData: UserData) => {
    try {
      const { data: responseUserData } = await axios.post(
        `${UserRepository.prototype.apiUrl}/user/register`,
        userData
      );
      return responseUserData;
    } catch (error) {
      return error;
    }
  };
}

export default UserRepository;

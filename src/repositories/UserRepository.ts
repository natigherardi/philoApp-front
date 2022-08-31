import { Item, IUserRepository } from "../types/IUserRepository";
import axios from "axios";
import UserData from "../types/UserData";

class UserRepository<T extends Item> implements IUserRepository<T> {
  constructor(public apiUrl: string) {}

  registration = async (userData: UserData) => {
    try {
      const { data: responseUserData } = await axios.post(
        `${this.apiUrl}/user/register`,
        userData
      );
      return responseUserData;
    } catch (error) {
      return error;
    }
  };
}

export default UserRepository;

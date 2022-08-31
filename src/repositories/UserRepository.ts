import { Item, UserData, UserRepository } from "../types/UserRepository";
import axios from "axios";

class Repository<T extends Item> implements UserRepository<T> {
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

export default Repository;

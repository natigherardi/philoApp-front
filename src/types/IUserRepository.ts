import { UserData, UserLogin } from "./UserData";

export interface Item {
  id: string;
}
export interface IUserRepository<T extends Item> {
  registration: (userData: UserData) => Promise<T>;
  login: (userData: UserLogin) => Promise<T>;
}

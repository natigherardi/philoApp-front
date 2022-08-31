import UserData from "./UserData";

export interface Item {
  id: string;
}
export interface IUserRepository<T extends Item> {
  registration: (userData: UserData) => Promise<T>;
}

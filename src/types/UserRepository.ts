import UserData from "./UserData";

export interface Item {
  id: string;
}
export interface UserRepository<T extends Item> {
  registration: (userData: UserData) => Promise<T>;
}

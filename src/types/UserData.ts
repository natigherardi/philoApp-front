export interface UserData {
  name: string;
  password: string;
  username: string;
}

export interface UserStore {
  name: string;
  password: string;
  id: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

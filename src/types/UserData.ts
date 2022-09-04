export interface UserData {
  name: string;
  password: string;
  username: string;
}

export interface UserStore {
  username: string;
  token: string;
  id: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserLoggedWithToken {
  username: string;
  token: string;
  name: string;
}

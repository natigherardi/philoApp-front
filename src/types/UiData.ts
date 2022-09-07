export type modalMessageType =
  | "no message"
  | "Registration correct"
  | "Registration failed"
  | "Login failed"
  | "We couldn't load any quotes. Sorry :(";

export interface Modal {
  isOpen: boolean;
  isError: boolean;
  message: modalMessageType;
}
export interface UiData {
  modal: Modal;
  isLoading: boolean;
}

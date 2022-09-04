export type modalMessageType =
  | "no message"
  | "Registration correct"
  | "Registration failed"
  | "Login correct"
  | "Login failed";

export interface Modal {
  isOpen: boolean;
  isError: boolean;
  message: modalMessageType;
}
export interface UiData {
  modal: Modal;
  isLoading: boolean;
}

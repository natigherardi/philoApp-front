export type modalMessageType =
  | "no message"
  | "Registration correct"
  | "Registration failed"
  | "Login failed"
  | "We couldn't load any quotes. Sorry :("
  | "You have to be logged in to do this action"
  | "Couldn't delete the quote. Sorry :("
  | "Couldn't create the quote. Sorry :("
  | "Quote created successfully!"
  | "Couldn't load the quote. Try again later";
export interface Modal {
  isOpen: boolean;
  isError: boolean;
  message: modalMessageType;
}
export interface UiData {
  modal: Modal;
  isLoading: boolean;
}

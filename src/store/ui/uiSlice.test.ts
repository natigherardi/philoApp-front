import { Modal, UiData } from "../../types/UiData";
import {
  closeModalActionCreator,
  openModalActionCreator,
  toggleLoadingModalActionCreator,
  uiDataReducer,
} from "./uiSlice";

describe("Given a uiData reducer", () => {
  const uiDataInitialState: UiData = {
    isLoading: false,
    modal: { isError: false, isOpen: false, message: "no message" },
  };
  describe("When it is called with an openModal action", () => {
    test("Then it should return the ui data with the modal data received and other previus properties", () => {
      const expectedModal = {
        isLoading: false,
        modal: { isError: true, isOpen: false, message: "Login correct" },
      };

      const result = uiDataReducer(
        uiDataInitialState,
        openModalActionCreator(expectedModal.modal as Modal)
      );

      expect(result).toStrictEqual(expectedModal);
    });
  });

  describe("When it is called with an closeModal action", () => {
    test("Then it should return the ui data with the modal closed", () => {
      const result = uiDataReducer(
        uiDataInitialState,
        closeModalActionCreator()
      );

      expect(result.modal.isOpen).toBeFalsy();
    });
  });

  describe("When it is called with an toggleLoadingModal action", () => {
    test("Then it should return the ui data with a reverted isLoading property", () => {
      const result = uiDataReducer(
        uiDataInitialState,
        toggleLoadingModalActionCreator()
      );

      expect(result.isLoading).toBeTruthy();
    });
  });
});

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiData, Modal } from "../../types/UiData";

const uiDataInitialState: UiData = {
  isLoading: false,
  modal: { isError: false, isOpen: false, message: "no message" },
};

const uiDataSlice = createSlice({
  name: "uiData",
  initialState: uiDataInitialState,
  reducers: {
    openModal: (previusUiData: UiData, action: PayloadAction<Modal>) => ({
      ...previusUiData,
      modal: action.payload,
    }),
    closeModal: (previusUiData: UiData) => ({
      ...previusUiData,
      modal: uiDataInitialState.modal,
    }),
    toggleLoadingModal: (previusUiData: UiData) => ({
      ...previusUiData,
      isLoading: !previusUiData.isLoading,
    }),
  },
});

export const uiDataReducer = uiDataSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  toggleLoadingModal: toggleLoadingModalActionCreator,
} = uiDataSlice.actions;

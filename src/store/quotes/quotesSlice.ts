import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quote, QuotesStore } from "../../types/Quote";

const quotesInitialSate: QuotesStore = { privateQuotes: [], publicQuotes: [] };

const quotesSlice = createSlice({
  name: "quotes",
  initialState: quotesInitialSate,
  reducers: {
    loadPublicQuotes: (
      previusQuotes: QuotesStore,
      action: PayloadAction<Quote[]>
    ) => ({ ...previusQuotes, publicQuotes: action.payload }),
    loadPrivateQuotes: (
      previusQuotes: QuotesStore,
      action: PayloadAction<Quote[]>
    ) => ({ ...previusQuotes, privateQuotes: action.payload }),
  },
});

export const quotesReducer = quotesSlice.reducer;

export const {
  loadPublicQuotes: loadPublicQuotesActionCreator,
  loadPrivateQuotes: loadPrivateQuotesActionCreator,
} = quotesSlice.actions;

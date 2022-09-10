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
    deleteQuote: (
      previusQuotes: QuotesStore,
      action: PayloadAction<string>
    ) => ({
      ...previusQuotes,
      privateQuotes: previusQuotes.privateQuotes.filter(
        (quote) => quote.id !== action.payload
      ),
    }),
  },
});

export const quotesReducer = quotesSlice.reducer;

export const {
  loadPublicQuotes: loadPublicQuotesActionCreator,
  loadPrivateQuotes: loadPrivateQuotesActionCreator,
  deleteQuote: deleteQuoteActionCreator,
} = quotesSlice.actions;

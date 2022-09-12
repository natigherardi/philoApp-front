import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Quote, QuotesStore } from "../../types/Quote";

const quotesInitialSate: QuotesStore = {
  privateQuotes: [],
  publicQuotes: [],
  currentQuoteDetail: {
    author: "",
    backUpImage: "",
    book: "",
    favoritedBy: [],
    id: "",
    image: "",
    owner: "",
    school: "",
    textContent: "",
    year: "",
  },
};

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
    loadQuoteDetail: (
      previusQuotes: QuotesStore,
      action: PayloadAction<Quote>
    ) => ({
      ...previusQuotes,
      currentQuoteDetail: action.payload,
    }),
  },
});

export const quotesReducer = quotesSlice.reducer;

export const {
  loadPublicQuotes: loadPublicQuotesActionCreator,
  loadPrivateQuotes: loadPrivateQuotesActionCreator,
  deleteQuote: deleteQuoteActionCreator,
  loadQuoteDetail: loadQuoteDetailActionCreator,
} = quotesSlice.actions;

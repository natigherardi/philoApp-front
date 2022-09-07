import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Quote from "../../types/Quote";

const quotesInitialSate: Quote[] = [
  { author: "", image: "", owner: "", textContent: "", user: "" },
];

const quotesSlice = createSlice({
  name: "quotes",
  initialState: quotesInitialSate,
  reducers: {
    loadQuotes: (previusQuotes: Quote[], action: PayloadAction<Quote[]>) =>
      action.payload,
  },
});

export const quotesReducer = quotesSlice.reducer;

export const { loadQuotes: loadQuotesActionCreator } = quotesSlice.actions;

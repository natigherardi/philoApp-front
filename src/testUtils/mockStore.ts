import { configureStore, createReducer } from "@reduxjs/toolkit";
import { QuotesStore } from "../types/Quote";

const mockQuotesInitialSate: QuotesStore = {
  publicQuotes: [
    {
      textContent: "test text",
      author: "test author",
      image: "test url image",
      owner: "test owner",
    },
  ],
  privateQuotes: [],
};

const mockQuotesReducer = createReducer<QuotesStore>(
  mockQuotesInitialSate,
  (builder) => {
    builder.addDefaultCase((state: QuotesStore) => state);
  }
);

const mockStore = configureStore({
  reducer: {
    quotes: mockQuotesReducer,
  },
});

export default mockStore;

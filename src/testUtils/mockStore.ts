import { configureStore, createReducer } from "@reduxjs/toolkit";
import Quote from "../types/Quote";

const mockQuotesInitialSate: Quote[] = [
  {
    textContent: "test text",
    author: "test author",
    image: "test url image",
    owner: "test owner",
  },
];

const mockQuotesReducer = createReducer<Quote[]>(
  mockQuotesInitialSate,
  (builder) => {
    builder.addDefaultCase((state: Quote[]) => state);
  }
);

const mockStore = configureStore({
  reducer: {
    quotes: mockQuotesReducer,
  },
});

export default mockStore;

import { configureStore, createReducer } from "@reduxjs/toolkit";
import { QuotesStore } from "../types/Quote";
import SessionInfo from "../types/SessionInfo";

const mockQuotesInitialSate: QuotesStore = {
  publicQuotes: [
    {
      textContent: "test text",
      author: "test author",
      image: "test url image",
      owner: "test owner",
      id: "12",
    },
  ],
  privateQuotes: [
    {
      textContent: "test text private quote",
      author: "test author",
      image: "test url image",
      owner: "test owner",
      id: "12",
    },
  ],
};

const mockUserInitialState = {
  userData: { id: "", username: "", token: "" },
  isLoggedIn: false,
};

const mockQuotesReducer = createReducer<QuotesStore>(
  mockQuotesInitialSate,
  (builder) => {
    builder.addDefaultCase((state: QuotesStore) => state);
  }
);

const mockUserSessionReducer = createReducer<SessionInfo>(
  mockUserInitialState,
  (builder) => {
    builder.addDefaultCase((state: SessionInfo) => state);
  }
);

const mockStore = configureStore({
  reducer: {
    quotes: mockQuotesReducer,
    userSession: mockUserSessionReducer,
  },
});

export default mockStore;

import { configureStore, createReducer } from "@reduxjs/toolkit";
import { QuotesStore } from "../types/Quote";
import SessionInfo from "../types/SessionInfo";
import { UiData } from "../types/UiData";

const mockQuotesInitialSate: QuotesStore = {
  publicQuotes: [
    {
      textContent: "test text",
      author: "test-author",
      image: "test url image",
      owner: "test owner",
      id: "12",
      backUpImage: "test backUp",
      book: "test book",
      favoritedBy: [],
      school: "test school",
      year: "1",
    },
  ],
  privateQuotes: [
    {
      textContent: "test text private quote",
      author: "test author",
      image: "test url image",
      owner: "test owner",
      id: "12",
      backUpImage: "test backUp",
      book: "test book",
      favoritedBy: [],
      school: "test school",
      year: "1",
    },
  ],
  currentQuoteDetail: {
    author: "",
    backUpImage: "",
    book: "",
    favoritedBy: [],
    id: "test-details-id",
    image: "",
    owner: "",
    school: "",
    textContent: "test detail",
    year: "",
  },
};

const mockUserInitialState = {
  userData: { id: "test user id", username: "mock", token: "mock" },
  isLoggedIn: true,
};

const mockUiInitialState: UiData = {
  isLoading: false,
  modal: { isError: false, isOpen: true, message: "no message" },
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

const mockUiReducer = createReducer<UiData>(mockUiInitialState, (builder) => {
  builder.addDefaultCase((state: UiData) => state);
});

const mockStore = configureStore({
  reducer: {
    quotes: mockQuotesReducer,
    userSession: mockUserSessionReducer,
    ui: mockUiReducer,
  },
});

export default mockStore;

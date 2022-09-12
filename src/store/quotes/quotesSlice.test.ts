import { QuotesStore } from "../../types/Quote";
import {
  deleteQuoteActionCreator,
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
  loadQuoteDetailActionCreator,
  quotesReducer,
} from "./quotesSlice";

describe("Given a quotes reducer", () => {
  const previusQuotes: QuotesStore = {
    privateQuotes: [
      {
        author: "test previus quote",
        image: "test previus quote",
        owner: "test previus quote",
        id: "test previus quote",
        textContent: "test previus quote",
        backUpImage: "test backUp",
        book: "test book",
        favoritedBy: [],
        school: "test school",
        year: "1",
      },
    ],
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
  const loadedQuotes = [
    {
      author: "test",
      image: "test",
      owner: "test",
      id: "test",
      textContent: "test",
      user: "test",
      backUpImage: "test backUp",
      book: "test book",
      favoritedBy: [],
      school: "test school",
      year: "1",
    },
  ];
  describe("When it is called with a loadPublicQuotes action", () => {
    test("Then it should return the quotes received from the action payload", () => {
      const newQuotes = quotesReducer(
        previusQuotes,
        loadPublicQuotesActionCreator(loadedQuotes)
      );

      expect(newQuotes.publicQuotes).toStrictEqual(loadedQuotes);
    });
  });

  describe("When it is called with a loadPrivateQuotes action", () => {
    test("Then it should return the quotes received from the action payload", () => {
      const newQuotes = quotesReducer(
        previusQuotes,
        loadPrivateQuotesActionCreator(loadedQuotes)
      );

      expect(newQuotes.privateQuotes).toStrictEqual(loadedQuotes);
    });
  });

  describe("When it is called with a deleteQuote action with a quote id as payload", () => {
    test("Then it should return the list of private quotes without the quote received", () => {
      const quoteToDeleteId = "test previus quote";

      const { privateQuotes } = quotesReducer(
        previusQuotes,
        deleteQuoteActionCreator(quoteToDeleteId)
      );
      const resultDelete = previusQuotes.privateQuotes.filter(
        (quote) => quote.id !== quoteToDeleteId
      );

      expect(privateQuotes).toStrictEqual(resultDelete);
    });
  });

  describe("When it is called with a loadQuoteDetail action", () => {
    test("Then it should return the detail quote received", () => {
      const quoteDetails = loadedQuotes[0];

      const { currentQuoteDetail } = quotesReducer(
        previusQuotes,
        loadQuoteDetailActionCreator(quoteDetails)
      );

      expect(currentQuoteDetail).toStrictEqual(quoteDetails);
    });
  });
});

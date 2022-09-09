import { QuotesStore } from "../../types/Quote";
import {
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
  quotesReducer,
} from "./quotesSlice";

describe("Given a quotes reducer", () => {
  const previusQuotes: QuotesStore = { privateQuotes: [], publicQuotes: [] };
  const loadedQuotes = [
    {
      author: "test",
      image: "test",
      owner: "test",
      textContent: "test",
      user: "test",
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
});

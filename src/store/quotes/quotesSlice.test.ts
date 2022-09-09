import { loadPublicQuotesActionCreator, quotesReducer } from "./quotesSlice";

describe("Given a quotes reducer", () => {
  describe("When it is called with a loadPublicQuotes action", () => {
    test("Then it should return the quotes received from the action payload", () => {
      const previusQuotes = [
        { author: "", image: "", owner: "", textContent: "", user: "" },
      ];
      const loadedQuotes = [
        {
          author: "test",
          image: "test",
          owner: "test",
          textContent: "test",
          user: "test",
        },
      ];

      const newQuotes = quotesReducer(
        previusQuotes,
        loadPublicQuotesActionCreator(loadedQuotes)
      );

      expect(newQuotes).toStrictEqual(loadedQuotes);
    });
  });
});

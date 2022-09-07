import axios from "axios";
import QuotesRepository from "./QuotesRepository";

describe("Given a QuotesRepository class", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const url = process.env.REACT_APP_API_URL as string;
  const quotesRepository = new QuotesRepository(url);
  describe("When we have an instance", () => {
    test("Then it should exist", () => {
      expect(quotesRepository).toBeTruthy();
    });
  });

  describe("When the getAllQuotes method is called", () => {
    test("Then if the API returns an OK response, the method should return the list of quotes received", async () => {
      const expectedResponse = [
        {
          author: "test",
          image: "test",
          textContent: "test",
          user: "test",
        },
      ];

      const returnedValue = await quotesRepository.getAllQuotes();

      expect(returnedValue).toStrictEqual(expectedResponse);
    });

    test("And then if the API responds with an error, the method should return it", async () => {
      const error = new Error("error");
      axios.get = jest.fn().mockRejectedValue(error);
      const quotesMockRepository = new QuotesRepository(url);

      const returnedValue = await quotesMockRepository.getAllQuotes();

      expect(returnedValue).toStrictEqual(error);
    });
  });
});

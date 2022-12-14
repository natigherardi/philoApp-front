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

  describe("When the getQuotesByUser function is called with a token and a user id", () => {
    const token = "123";
    describe("When the API succesfsfully responds with the user's lists of quotes", () => {
      jest.clearAllMocks();

      test("Then it should return the lists", async () => {
        const expectedReponse = {
          quotes: {
            quotesCreated: [
              {
                textContent: "test",
                author: "test",
                owner: "test",
                image: "test",
                year: 1650,
                school: "test",
                book: "test",
                favoritedBy: ["test"],
                id: "test",
              },
            ],
            quotesFavorited: [
              {
                textContent: "test",
                author: "test",
                owner: "test",
                image: "test",
                year: 1650,
                school: "test",
                book: "test",
                favoritedBy: ["test"],
                id: "test",
              },
            ],
          },
        };
        const idUser = "123";

        const result = await quotesRepository.getQuotesByUser(token, idUser);

        expect(result).toStrictEqual(expectedReponse);
      });
    });

    describe("And when the API returns an error", () => {
      test("Then it should return the error", async () => {
        const fakeIdError = "test error";

        const result = await quotesRepository.getQuotesByUser(
          token,
          fakeIdError
        );

        expect(result).toBeInstanceOf(Error);
      });
    });
  });

  describe("When the getAllQuotes method is called", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

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
      const quotesMockRepository = new QuotesRepository(url);

      const returnedValue = await quotesMockRepository.getAllQuotes();

      expect(returnedValue).toBeInstanceOf(Error);
    });
  });

  describe("When the deleteQuote method is called with a userId, a token and a QuoteId to delete", () => {
    const quotesRepo = new QuotesRepository(url);
    const mockToken = "mockToken";
    const expectedResponse = "mock delete correct";
    const mockUserId = "mockUser";

    describe("When the API responds succeswsfully", () => {
      test("Then it should return the data receveid", async () => {
        const mockQuoteId = "mockQuoteId";
        const result = await quotesRepo.deleteQuote(
          mockUserId,
          mockToken,
          mockQuoteId
        );

        expect(result).toStrictEqual(expectedResponse);
      });
    });

    describe("And when the API returns an error", () => {
      test("Then it should return it", async () => {
        const badQuoteId = "test bad ID";

        const result = await quotesRepo.deleteQuote(
          mockUserId,
          mockToken,
          badQuoteId
        );

        expect(result).toBeInstanceOf(Error);
      });
    });
  });

  describe("When the createQuote method is called and it receives a quote, a userId and the token", () => {
    const quotesRepository = new QuotesRepository(url);
    const mockToken = "123";
    const mockNewQuote = new FormData();
    test("Then if the API returns a successfull response it should return the received data", async () => {
      const mockUserId = "ok";
      const expectedReponse = "Quote created";

      const response = await quotesRepository.createQuote(
        mockNewQuote,
        mockToken,
        mockUserId
      );

      expect(response).toStrictEqual(expectedReponse);
    });

    test("And when the API returns an error response then it should return the error", async () => {
      const mockUserId = "error";

      const response = await quotesRepository.createQuote(
        mockNewQuote,
        mockToken,
        mockUserId
      );

      expect(response).toBeInstanceOf(Error);
    });
  });

  describe("When the getQuoteById method is called with a quoteId", () => {
    const quotesRepository = new QuotesRepository(url);
    describe("And when the quoteId is valid", () => {
      test("Then it should return the data received from the API", async () => {
        const expectedResponse = "Quote by id";

        const response = await quotesRepository.getQuoteById("mock-id");

        expect(response).toStrictEqual(expectedResponse);
      });
    });

    describe("And when the quoteId is invalid", () => {
      test("Then it should return the error received by the API", async () => {
        const response = await quotesRepository.getQuoteById("bad-req-mock");

        expect(response).toBeInstanceOf(Error);
      });
    });
  });
});

import { renderHook } from "@testing-library/react";
import axios from "axios";
import {
  deleteQuoteActionCreator,
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
} from "../../store/quotes/quotesSlice";
import { openModalActionCreator } from "../../store/ui/uiSlice";
import Wrapper from "../../testUtils/Wrapper";
import WrapperRealStore from "../../testUtils/WrapperActualStore";
import { Modal } from "../../types/UiData";
import useQuotes from "./useQuotes";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

describe("Given the loadPublicQuotes function returned by the useQuotes hook", () => {
  describe("When it is is invoked", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const {
      result: {
        current: { loadPublicQuotes },
      },
    } = renderHook(() => useQuotes(), { wrapper: Wrapper });

    test("Then the dispatch should be called with an action loadPublicQuotes with the quotes returned by the getAllQuotes repo method", async () => {
      const quotesReturned = {
        quotes: {
          publicQuotes: [
            {
              author: "test",
              image: "test",
              textContent: "test",
              user: "test",
              owner: "6310d724c2e50669e79b0fb5",
            },
          ],
        },
      };
      const expectedActionPayload = quotesReturned.quotes.publicQuotes;
      axios.get = jest.fn().mockResolvedValue({ data: quotesReturned });

      await loadPublicQuotes();

      expect(mockedDispatch).toHaveBeenCalledWith(
        loadPublicQuotesActionCreator(expectedActionPayload)
      );
    });

    test("And then if the API returns an erorr the dispatch should be called with an open modal action with message 'We couldn't load any quotes. Sorry :('", async () => {
      jest.restoreAllMocks();
      const error = new Error("We couldn't load any quotes. Sorry :(");
      const expectedModal: Modal = {
        isError: true,
        isOpen: true,
        message: "We couldn't load any quotes. Sorry :(",
      };
      axios.get = jest.fn().mockRejectedValue(error);

      await loadPublicQuotes();

      expect(mockedDispatch).toHaveBeenCalledWith(
        openModalActionCreator(expectedModal)
      );
    });
  });
});

describe("Given the loadPrivateQuotes function returned by the useQuotes hook", () => {
  describe("When it is is invoked with a user id and token", () => {
    const userId = "1";
    const userToken = "2";
    afterEach(() => {
      jest.clearAllMocks();
    });
    const {
      result: {
        current: { loadPrivateQuotes },
      },
    } = renderHook(() => useQuotes(), { wrapper: Wrapper });

    test("Then the dispatch should be called with an action loadPrivateQuotes with the quotes returned by the getQuotesByUser repo method", async () => {
      const quotesReturned = {
        quotes: {
          quotesCreated: [
            {
              author: "test",
              image: "test",
              textContent: "test",
              user: "test",
              owner: "6310d724c2e50669e70b0fb5",
            },
          ],
          quotesFavorited: [
            {
              author: "test",
              image: "test",
              textContent: "test",
              user: "test",
              owner: "6310d724c2e50669e79b0fb5",
            },
          ],
        },
      };
      const {
        quotes: { quotesCreated, quotesFavorited },
      } = quotesReturned;
      const expectedActionPayload = quotesCreated.concat(quotesFavorited);
      axios.get = jest.fn().mockResolvedValue({ data: quotesReturned });

      await loadPrivateQuotes(userToken, userId);

      expect(mockedDispatch).toHaveBeenCalledWith(
        loadPrivateQuotesActionCreator(expectedActionPayload)
      );
    });

    test("And then if the API returns an erorr the dispatch should be called with an open modal action with message 'We couldn't load any quotes. Sorry :('", async () => {
      jest.restoreAllMocks();
      const error = new Error("We couldn't load any quotes. Sorry :(");
      const expectedModal: Modal = {
        isError: true,
        isOpen: true,
        message: "We couldn't load any quotes. Sorry :(",
      };
      axios.get = jest.fn().mockRejectedValue(error);

      await loadPrivateQuotes(userToken, userId);

      expect(mockedDispatch).toHaveBeenCalledWith(
        openModalActionCreator(expectedModal)
      );
    });
  });
});

describe("Given the deleteQuote function returned by the useQuotes hook", () => {
  const mockQuoteId = "1";
  describe("When it is called with a quoteId", () => {
    describe("And the user is not logged in", () => {
      test("Then the dispath should be called with an openModal action with message 'You have to be logged in to do this action'", async () => {
        const {
          result: {
            current: { deleteQuote },
          },
        } = renderHook(() => useQuotes(), { wrapper: WrapperRealStore });

        await deleteQuote(mockQuoteId);

        expect(mockedDispatch).toHaveBeenCalledWith(
          openModalActionCreator({
            isError: true,
            isOpen: true,
            message: "You have to be logged in to do this action",
          })
        );
      });
    });

    describe("And the user is logged in", () => {
      describe("And when the delete method of the quotes repository is called", () => {
        afterEach(() => {
          jest.clearAllMocks();
        });

        const {
          result: {
            current: { deleteQuote: deleteMocked },
          },
        } = renderHook(() => useQuotes(), { wrapper: Wrapper });

        test("Then if the method responds with an error the dispatch should be called with 'Couldn't delete the quote. Sorry :('", async () => {
          axios.delete = jest.fn().mockRejectedValue(new Error());
          const expectedActionPayload: Modal = {
            isError: true,
            isOpen: true,
            message: "Couldn't delete the quote. Sorry :(",
          };

          await deleteMocked(mockQuoteId);

          expect(mockedDispatch).toHaveBeenCalledWith(
            openModalActionCreator(expectedActionPayload)
          );
        });

        test("And then if the method is successfull, the dispatch should be called with a delete action with the quote id as payload", async () => {
          axios.delete = jest.fn().mockResolvedValue({ data: "mock success" });

          await deleteMocked(mockQuoteId);

          expect(mockedDispatch).toHaveBeenCalledWith(
            deleteQuoteActionCreator(mockQuoteId)
          );
        });
      });
    });
  });
});

describe("Given the createQuote function returned by the useQuotes hook", () => {
  describe("When it is called with a new quote", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const mockedNewQuote = new FormData();
    describe("And the user is not logged in", () => {
      test("Then the dispath should be called with an openModal action with message 'You have to be logged in to do this action'", async () => {
        const {
          result: {
            current: { createQuote },
          },
        } = renderHook(() => useQuotes(), { wrapper: WrapperRealStore });

        await createQuote(mockedNewQuote);

        expect(mockedDispatch).toHaveBeenCalledWith(
          openModalActionCreator({
            isError: true,
            isOpen: true,
            message: "You have to be logged in to do this action",
          })
        );
      });
    });

    describe("And when the user is logged in", () => {
      const {
        result: {
          current: { createQuote },
        },
      } = renderHook(() => useQuotes(), { wrapper: Wrapper });

      describe("And when the create method of the quotes repository's response is successfull", () => {
        test("Then the dispatch should be called with a modal of success with text 'Quote created successfully!'", async () => {
          axios.post = jest.fn().mockResolvedValue("ok");
          const expectedAction = openModalActionCreator({
            isError: false,
            isOpen: true,
            message: "Quote created successfully!",
          });

          await createQuote(mockedNewQuote);

          expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
        });
      });

      describe("And when the create method of the quotes repository's response is an error", () => {
        test("Then the dispatch should be called with a modal of error with txt 'Couldn't create the quote. Sorry :('", async () => {
          const expectedAction = openModalActionCreator({
            isError: true,
            isOpen: true,
            message: "Couldn't create the quote. Sorry :(",
          });
          axios.post = jest.fn().mockRejectedValue(new Error());

          await createQuote(mockedNewQuote);

          expect(mockedDispatch).toHaveBeenCalledWith(expectedAction);
        });
      });
    });
  });
});

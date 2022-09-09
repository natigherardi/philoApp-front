import { renderHook } from "@testing-library/react";
import axios from "axios";
import {
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
} from "../../store/quotes/quotesSlice";
import { openModalActionCreator } from "../../store/ui/uiSlice";
import Wrapper from "../../testUtils/Wrapper";
import { Modal } from "../../types/UiData";
import useQuotes from "./useQuotes";

const mockedDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockedDispatch,
}));

const url = process.env.REACT_APP_API_URL as string;

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
          publicQuotes: [],
          privateQuotes: [
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
      const expectedActionPayload = quotesReturned.quotes.privateQuotes;
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

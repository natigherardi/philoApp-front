import { renderHook } from "@testing-library/react";
import axios from "axios";
import { loadQuotesActionCreator } from "../../store/quotes/quotesSlice";
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

describe("Given the loadAllQuotes function returned by the useQuotes hook", () => {
  describe("When it is is invoked with a user", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
    const {
      result: {
        current: { loadAllQuotes },
      },
    } = renderHook(() => useQuotes(), { wrapper: Wrapper });

    test("Then the dispatch should be called with an action loadQuotes with the quotes returned by the getAllQuotes repo method", async () => {
      const quotes = [
        {
          author: "test",
          image: "test",
          textContent: "test",
          user: "test",
          owner: "6310d724c2e50669e79b0fb5",
        },
      ];
      axios.get = jest.fn().mockResolvedValue({ data: quotes });

      await loadAllQuotes();

      expect(mockedDispatch).toHaveBeenCalledWith(
        loadQuotesActionCreator(quotes)
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

      await loadAllQuotes();

      expect(mockedDispatch).toHaveBeenCalledWith(
        openModalActionCreator(expectedModal)
      );
    });
  });
});

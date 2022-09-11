import { useCallback } from "react";
import QuotesRepository from "../../repositories/QuotesRepository/QuotesRepository";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  deleteQuoteActionCreator,
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
} from "../../store/quotes/quotesSlice";
import { openModalActionCreator } from "../../store/ui/uiSlice";

const useQuotes = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();
  const {
    isLoggedIn,
    userData: { id: userId, token },
  } = useAppSelector((state) => state.userSession);

  const loadPublicQuotes = useCallback(async () => {
    const quotesRepository = new QuotesRepository(url);
    const quotesData = await quotesRepository.getAllQuotes();
    if (quotesData instanceof Error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "We couldn't load any quotes. Sorry :(",
        })
      );
      return;
    }

    const {
      quotes: { publicQuotes },
    } = quotesData;

    dispatch(loadPublicQuotesActionCreator(publicQuotes));
  }, [url, dispatch]);

  const loadPrivateQuotes = useCallback(
    async (token: string, id: string) => {
      const quotesRepository = new QuotesRepository(url);
      const quotesData = await quotesRepository.getQuotesByUser(token, id);
      if (quotesData instanceof Error) {
        dispatch(
          openModalActionCreator({
            isError: true,
            isOpen: true,
            message: "We couldn't load any quotes. Sorry :(",
          })
        );
        return;
      }

      const {
        quotes: { quotesCreated, quotesFavorited },
      } = quotesData;

      const privateQuotes = quotesCreated.concat(quotesFavorited);

      dispatch(loadPrivateQuotesActionCreator(privateQuotes));
    },
    [url, dispatch]
  );

  const deleteQuote = async (quoteId: string) => {
    if (!isLoggedIn) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "You have to be logged in to do this action",
        })
      );
      return;
    }
    const quotesRepository = new QuotesRepository(url);
    const deleteResult = await quotesRepository.deleteQuote(
      userId,
      token,
      quoteId
    );
    if (deleteResult instanceof Error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "Couldn't delete the quote. Sorry :(",
        })
      );
      return;
    }
    dispatch(deleteQuoteActionCreator(quoteId));
  };
  const createQuote = async (quote: FormData) => {
    if (!isLoggedIn) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "You have to be logged in to do this action",
        })
      );
      return;
    }
    const quotesRepository = new QuotesRepository(url);
    const creationResult = await quotesRepository.createQuote(
      quote,
      token,
      userId
    );
    if (creationResult instanceof Error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "Couldn't create the quote. Sorry :(",
        })
      );
      return;
    }
    dispatch(
      openModalActionCreator({
        isError: false,
        isOpen: true,
        message: "Quote created successfully!",
      })
    );
  };

  return { loadPublicQuotes, loadPrivateQuotes, deleteQuote, createQuote };
};

export default useQuotes;

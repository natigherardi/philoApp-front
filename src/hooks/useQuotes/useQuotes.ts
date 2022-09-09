import { useCallback } from "react";
import QuotesRepository from "../../repositories/QuotesRepository/QuotesRepository";
import { useAppDispatch } from "../../store/hooks";
import {
  loadPrivateQuotesActionCreator,
  loadPublicQuotesActionCreator,
} from "../../store/quotes/quotesSlice";
import { openModalActionCreator } from "../../store/ui/uiSlice";

const useQuotes = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();

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

  return { loadPublicQuotes, loadPrivateQuotes };
};

export default useQuotes;

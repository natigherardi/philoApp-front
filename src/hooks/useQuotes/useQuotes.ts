import { useCallback } from "react";
import QuotesRepository from "../../repositories/QuotesRepository/QuotesRepository";
import { useAppDispatch } from "../../store/hooks";
import { loadPublicQuotesActionCreator } from "../../store/quotes/quotesSlice";
import { openModalActionCreator } from "../../store/ui/uiSlice";

const useQuotes = () => {
  const url = process.env.REACT_APP_API_URL as string;
  const dispatch = useAppDispatch();

  const loadAllQuotes = useCallback(async () => {
    const quotesRepository = new QuotesRepository(url);
    const quotes = await quotesRepository.getAllQuotes();
    if (quotes instanceof Error) {
      dispatch(
        openModalActionCreator({
          isError: true,
          isOpen: true,
          message: "We couldn't load any quotes. Sorry :(",
        })
      );
      return;
    }
    dispatch(loadPublicQuotesActionCreator(quotes));
  }, [url, dispatch]);

  const loadPublicQuotesByUser = useCallback(
    async (token: string, id: string) => {
      const quotesRepository = new QuotesRepository(url);
      const { quotes } = await quotesRepository.getQuotesByUser(token, id);
      if (quotes instanceof Error) {
        dispatch(
          openModalActionCreator({
            isError: true,
            isOpen: true,
            message: "We couldn't load any quotes. Sorry :(",
          })
        );
        return;
      }
      dispatch(load);
    },
    [url, dispatch]
  );

  return { loadAllQuotes };
};

export default useQuotes;

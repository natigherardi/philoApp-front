import { useEffect } from "react";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";
import { Quote } from "../../types/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesListStyled from "./QuotesListStyled";

const QuotesList = (): JSX.Element => {
  const quotesCards: Quote[] = useAppSelector((state) => state.quotes);

  const { loadAllQuotes } = useQuotes();

  useEffect(() => {
    (async () => {
      await loadAllQuotes();
    })();
  }, [loadAllQuotes]);

  return (
    <QuotesListStyled>
      {quotesCards.map((quote) => (
        <li key={quote.id}>
          <QuoteCard quote={quote} />
        </li>
      ))}
    </QuotesListStyled>
  );
};

export default QuotesList;

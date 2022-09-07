import { useAppSelector } from "../../store/hooks";
import Quote from "../../types/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesListStyled from "./QuotesListStyled";

const QuotesList = (): JSX.Element => {
  const quotesCards: Quote[] = useAppSelector((state) => state.quotes);

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

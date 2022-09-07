import { useAppSelector } from "../../store/hooks";
import Quote from "../../types/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";

const QuotesList = (): JSX.Element => {
  const quotesCards: Quote[] = useAppSelector((state) => state.quotes);

  return (
    <ul>
      {quotesCards.map((quote) => (
        <li key={quote.id}>
          <QuoteCard quote={quote} />
        </li>
      ))}
    </ul>
  );
};

export default QuotesList;

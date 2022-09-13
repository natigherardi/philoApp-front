import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";
import { Quote } from "../../types/Quote";
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesListStyled from "./QuotesListStyled";

interface QuotesListProps {
  quotesToRender: Quote[];
}

const QuotesList = ({ quotesToRender }: QuotesListProps): JSX.Element => {
  return (
    <QuotesListStyled>
      {quotesToRender.map((quote) => (
        <li key={quote.id}>
          <QuoteCard quote={quote} />
        </li>
      ))}
    </QuotesListStyled>
  );
};

export default QuotesList;

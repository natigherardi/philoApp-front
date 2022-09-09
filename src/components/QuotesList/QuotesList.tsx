import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useQuotes from "../../hooks/useQuotes/useQuotes";
import { useAppSelector } from "../../store/hooks";
import QuoteCard from "../QuoteCard/QuoteCard";
import QuotesListStyled from "./QuotesListStyled";

const QuotesList = (): JSX.Element => {
  const { privateQuotes, publicQuotes } = useAppSelector(
    (state) => state.quotes
  );

  const { id, token } = useAppSelector((state) => state.userSession.userData);

  const { loadPublicQuotes, loadPrivateQuotes } = useQuotes();

  const { pathname } = useLocation();

  useEffect(() => {
    (async () => {
      pathname === "/home"
        ? await loadPublicQuotes()
        : await loadPrivateQuotes(token, id);
    })();
  }, [loadPublicQuotes, loadPrivateQuotes, pathname, id, token]);

  let quotesToRender = pathname === "/home" ? publicQuotes : privateQuotes;

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
